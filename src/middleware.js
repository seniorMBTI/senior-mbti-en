import { NextResponse } from 'next/server';

export function middleware(request) {
  // English version - always set to English
  const response = NextResponse.next();
  response.cookies.set('language', 'en', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  });
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}