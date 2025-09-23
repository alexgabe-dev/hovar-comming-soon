import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
  const res = NextResponse.next()
  
  // TODO: itt lehetne CSP nonce-t generálni dinamikusan
  // const nonce = crypto.randomUUID()
  // res.headers.set('Content-Security-Policy', `script-src 'self' 'nonce-${nonce}'`)
  
  return res
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 