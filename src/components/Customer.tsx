import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {ICustomer, RootStore} from "../utils/TypeScript"
import {getCustomers} from "../redux/actions/customerAction"

const Customer = () => {
    const {data}  = useSelector((state: RootStore) => state.customerReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers());
      }, [dispatch]);

    return (
       <div className="customerCard">
       {
        data?.map((customer:ICustomer) => (
            <div className="card" style={{width: "18rem"}} key={customer?.id} >
            <div className="card-header">
              {customer?.customerName} && {customer?.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{customer?.address}</li>
              <li className="list-group-item">{customer?.telephone}</li>
              <li className="list-group-item">{customer?.zip}</li>
            </ul>
          </div> 
        ) )  
       }
       </div>
    )
}

export default Customer
