import { ICustomer } from '../../utils/TypeScript'

export const CUSTOMER = 'CUSTOMER'

export interface ICustomerR {
  access_token?: string
  message?: string
  data?: ICustomer[]
}

export interface ICustomerType{
  type: typeof CUSTOMER
  payload: ICustomerR
}