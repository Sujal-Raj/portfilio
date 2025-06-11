// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes you want to protect
const protectedRoutes = ['/admin/dashboard', '/admin/blog']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // If the route is protected and no token, redirect to login
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Allow the request to proceed
  return NextResponse.next()
}


export const config = {
  matcher: ['/admin/:path*', '/admin/:path*'], // paths to apply middleware
}
