import { FORECAST, IForecastR, IForecastType } from '../types/forecastType';


const forecastReducer = (state: IForecastR = {}, action: IForecastType): IForecastR => {
  switch (action.type){
    case FORECAST:
      return action.payload
    default:
      return state
  }
}

export default forecastReducer;