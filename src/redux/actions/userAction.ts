import {Dispatch} from "redux"
import { ALERT, IAlertType } from "../types/alertType";
import { USER,IUserType } from "../types/userType"

import {getAPI} from "../../utils/FetchData"


export const getUsers = 
() => async (dispatch: Dispatch<IUserType | IAlertType > ) => {
    try {
        dispatch({type: ALERT, payload: {loading: true }})

        const res = await getAPI("/users", {headers: {
            tokenn: localStorage.getItem("logged")
        }})

        dispatch({
            type: USER, payload: res.data
        })

    } catch (err: any) {
        dispatch({ type: ALERT, payload: {errors: err.response.data.message }})
    }
}