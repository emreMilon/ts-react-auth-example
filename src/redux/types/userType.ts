import { IUser } from '../../utils/TypeScript'

export const USER = 'USER'

export interface IUserR {
  access_token?: string
  message?: string
  data?: IUser[]
}

export interface IUserType{
  type: typeof USER
  payload: IUserR
}