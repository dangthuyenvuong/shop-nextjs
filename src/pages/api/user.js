import axios from "axios";
import apiServer from "../../config/apiServer";
import { parse } from 'cookie'

export default async function (req, res) {

    if (req.method === "GET") {
        try {
            const { authen } = parse(req.headers.cookie || '')
            if (authen) {
                const token = JSON.parse(authen)
                const user = await apiServer.get('/user/get-info', {
                    headers: {
                        Authorization: `Bearer ${token.data.accessToken}`
                    }
                })
                res.json(user.data)
            } else {
                return res.status(403).json({ message: 'Xin vui lòng login!' })
            }
        }catch(err) {
            console.log(err)
        }

    }
}