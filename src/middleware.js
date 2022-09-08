import { NextResponse } from 'next/server'
export function middleware(req) {
    const authen = req.cookies.get('authen')

    const { url } = req
    if (url.includes('auth')) {
        if (authen) {
            const url = req.nextUrl.clone()
            url.pathname = '/account'
            return NextResponse.redirect(url)
        }
    }
    if (url.includes('account')) {
        if (!authen) {
            const url = req.nextUrl.clone()
            url.pathname = '/auth'
            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/auth', '/account/:path*'],
}