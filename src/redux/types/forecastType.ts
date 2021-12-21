import { IForecast } from '../../utils/TypeScript'

export const FORECAST = 'FORECAST'

export interface IForecastR {
  access_token?: string
  message?: string
  data?: IForecast[]
}

export interface IForecastType{
  type: typeof FORECAST
  payload: IForecastR
}