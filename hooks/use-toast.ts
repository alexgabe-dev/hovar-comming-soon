"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

// toast config - max 1 toast, long delay
const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000 // fixme: ez nagyon hosszú, valószínűleg teszt érték

// toast data type - extended with id
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

// action types - redux-style actions
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// global counter - unique ID gen
let count = 0

function genId() {
  // increment counter, wrap around if needed
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

// action union type - all possible actions
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// state interface - toast array
interface State {
  toasts: ToasterToast[]
}

// timeout map - cleanup management
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// queue toast for removal - delayed cleanup
const addToRemoveQueue = (toastId: string) => {
  // skip if already queued
  if (toastTimeouts.has(toastId)) {
    return
  }

  // set timeout for removal
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// reducer - state management logic
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // add new toast, limit count
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      // update existing toast by id
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        // dismiss all toasts
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      // mark as closed
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      // remove from array
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// global state management - singleton pattern
const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

// dispatch action - update state + notify listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// toast input type - without id
type Toast = Omit<ToasterToast, "id">

// create toast - main API function
function toast({ ...props }: Toast) {
  const id = genId()

  // update function - modify existing toast
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  // dismiss function - close toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // add new toast to state
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  // return control functions
  return {
    id: id,
    dismiss,
    update,
  }
}

// hook for toast state - subscribe to changes
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    // subscribe to state changes
    listeners.push(setState)
    return () => {
      // cleanup - remove listener
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  // return state + control functions
  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
