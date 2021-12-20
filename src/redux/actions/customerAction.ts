import {Dispatch} from "redux"
import { ALERT, IAlertType } from "../types/alertType";
import { CUSTOMER, ICustomerType } from "../types/customerType"

import {getAPI} from "../../utils/FetchData"


export const getCustomers = 
() => async (dispatch: Dispatch<ICustomerType | IAlertType > ) => {
    try {
        dispatch({type: ALERT, payload: {loading: true }})

        const res = await getAPI("/customers", {headers: {
            tokenn: localStorage.getItem("logged")
        }})

        dispatch({
            type: CUSTOMER, payload: res.data
        })

    } catch (err: any) {
        dispatch({ type: ALERT, payload: {errors: err.response.data.message }})
    }
}


