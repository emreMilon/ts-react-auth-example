import {Dispatch} from "redux"
import { ALERT, IAlertType } from "../types/alertType";
import { FORECAST, IForecastType } from "../types/forecastType"

import {getAPI} from "../../utils/FetchData"


export const getForecasts = 
() => async (dispatch: Dispatch<IForecastType | IAlertType > ) => {
    try {
        dispatch({type: ALERT, payload: {loading: true }})

        const res = await getAPI(`/forecasts`, {headers: {
            tokenn: localStorage.getItem("logged")
        }})

        dispatch({
            type: FORECAST, payload: res.data
        })

    } catch (err: any) {
        dispatch({ type: ALERT, payload: {errors: err.response.data.message }})
    }
}

