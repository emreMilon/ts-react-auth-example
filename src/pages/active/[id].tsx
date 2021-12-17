import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

import {IParams} from "../../utils/TypeScript"
import { postAPI } from '../../utils/FetchData'
import {showErrMsg, showSuccessMsg} from "../../components/alert/Alert"

const Active = () => {
    const {id} : IParams = useParams()
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => {
        if(id) {
            postAPI("active", {active_token : id})
            .then((res:any) => setSuccess(res?.data.message))
            .catch((err: any) => setErr(err.response.data.message))
        }
    }, [id])

    return (
        <div className="activate">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
        </div>
    )
}

export default Active
