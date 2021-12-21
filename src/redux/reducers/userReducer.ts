import { USER, IUserR, IUserType } from '../types/userType'


const userReducer = (state: IUserR = {}, action: IUserType): IUserR => {
  switch (action.type){
    case USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer;