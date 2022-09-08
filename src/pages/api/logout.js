import { serialize } from "cookie";

export default function (req, res) {
    const serialised = serialize('authen', null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: -1,
        path: '/',
    })

    res.setHeader('Set-Cookie', serialised)
    res.status(200).json({ message: 'Successfuly logged out!' })
}