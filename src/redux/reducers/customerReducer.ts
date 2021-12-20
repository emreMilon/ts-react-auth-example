import { CUSTOMER, ICustomerR, ICustomerType } from '../types/customerType'


const customerReducer = (state: ICustomerR = {}, action: ICustomerType): ICustomerR => {
  switch (action.type){
    case CUSTOMER:
      return action.payload
    default:
      return state
  }
}

export default customerReducer;