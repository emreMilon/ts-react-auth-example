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