import axios from "axios"
import { serialize } from 'cookie'
import apiServer from '../../config/apiServer'

export default async function (req, res) {
    const { username, password } = req.body
    if (req.method === 'POST') {
        if (username && password) {
            try {
                const { data } = await apiServer.post('/login', { username, password })

                const serialised = serialize('authen', JSON.stringify(data), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/',
                })

                res.setHeader('Set-Cookie', serialised)
                res.json({ success: true })
                // res.json(result.data)
            } catch (err) {
                console.log(err.response.data)
                res.json(err.response.data)
            }
        }
    } else {
        res.status(404).send('Not found')
    }
}