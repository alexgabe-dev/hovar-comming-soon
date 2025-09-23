"use client"

import { useSyncExternalStore } from "react"

export type Toast = {
  id: string
  title?: string
  description?: string
}

type ToastStore = {
  toasts: Toast[]
  listeners: Set<() => void>
  timeouts: Map<string, ReturnType<typeof setTimeout>>
}

// HMR-duplikáció védelem - globalThis store
declare global {
  var __toastStore: ToastStore | undefined
}

const getStore = (): ToastStore => {
  if (!globalThis.__toastStore) {
    globalThis.__toastStore = {
      toasts: [],
      listeners: new Set(),
      timeouts: new Map()
    }
  }
  return globalThis.__toastStore
}

const store = getStore()

function notify() {
  // notify batching - egy renderciklusba gyűjtjük
  queueMicrotask(() => {
    store.listeners.forEach(listener => listener())
  })
}

function subscribe(cb: () => void) {
  store.listeners.add(cb) // Set - nincs duplikáció
  return () => {
    store.listeners.delete(cb) // O(1) törlés
  }
}

function getSnapshot() { 
  return store.toasts 
}

function getServerSnapshot() { 
  return [] // SSR safe
}

function clearAll() {
  for (const [, t] of store.timeouts) clearTimeout(t) // clear all timeouts
  store.timeouts.clear()
  store.toasts = []
  notify()
}

const MAX_TOASTS = 1 // később konfigurálható
const MIN_DURATION = 1000 // minimum 1s

function toast({ 
  title, 
  description, 
  duration = 3000 
}: { 
  title?: string
  description?: string
  duration?: number 
}) {
  const id = (globalThis.crypto?.getRandomValues?.(new Uint32Array(1))[0] ?? Math.random()*1e9 | 0).toString(36) // crypto fallback
  
  const newToast = { id, title, description }
  const actualDuration = Math.max(duration, MIN_DURATION) // minimum duration
  
  store.toasts = [newToast, ...store.toasts].slice(0, MAX_TOASTS) // queue with limit
  
  notify()
  
  // auto dismiss
  const t = setTimeout(() => dismiss(id), actualDuration)
  store.timeouts.set(id, t)
  
  return { id, dismiss: () => dismiss(id) }
}

function dismiss(id: string) {
  const t = store.timeouts.get(id)
  if (t) { 
    clearTimeout(t) 
    store.timeouts.delete(id) 
  }
  store.toasts = store.toasts.filter(t => t.id !== id) // remove by id
  notify()
}

export function useToast() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return {
    toasts: state, 
    toast,
    dismiss, 
    clearAll 
  }
}

export { toast }
