import { ChangeEvent, FormEvent } from 'react'
import rootReducer from '../redux/reducers/index'

export type InputChange = ChangeEvent<HTMLInputElement>

export type FormSubmit = FormEvent<HTMLFormElement>

export type RootStore = ReturnType<typeof rootReducer>


export interface IParams {
  page: string
  id: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegister extends IUserLogin {
  userId: string
  firstName: string
  lastName: string
  position: string
  passwordConfirmation: string
}


export interface IUser extends IUserLogin {
  userId: string
  firstName: string
  lastName: string
  position: string
  createdAt: string
  updatedAt: string
}

export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}

export interface ICheck {
  errMsg?: string[],
  errLength? : number
}


export interface ICustomer {
  id: string;
  customerName: string;
  address: string;
  telephone: string;
  zip: number;
  createdAt: string;
  updatedAt: string;
}

export interface IForecast {
  forecastId: number;
  userId: string;
  customerId: string;
  customerName: string;
  customerAddress: string;
  customerZip: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}