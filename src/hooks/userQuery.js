import { useEffect, useState } from "react";

export default function useQuery(promise, dependencyList = []) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        promise()
        .then(res => {
            setData(res.data)
        })
        .finally(() => {
            setLoading(false)
        })


    }, dependencyList)

    return {
        data,
        loading,
    }
}