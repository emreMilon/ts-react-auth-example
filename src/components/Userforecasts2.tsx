import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IForecast, RootStore, ICustomer } from "../utils/TypeScript";
import { useParams } from "react-router-dom";
import { getCustomers } from "../redux/actions/customerAction";

interface RouteParams {
  id: string;
}

const Userforecasts2 = () => {
  let { id } = useParams<RouteParams>();
  const [customerId, setCustomerId] = useState<string>("");
  const [counter, setCounter] = useState(0);
  const { data } = useSelector((state: RootStore) => state.forecast);
  const forecast = data
    ?.filter((forecast: IForecast | any) => forecast.userId === id)
    .map(({ customerId }) => customerId);

  const { customerReducer } = useSelector((state: RootStore) => state);
  const customer: ICustomer | any = customerReducer?.data?.filter(
    (customer) => customer.id === customerId
  );

  const art = () => setTimeout(() => setCounter(1), 50);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
    const main = () => {
      if (forecast) {
        setCustomerId(forecast[0]);
      }
      art();
    };
    main();
  }, [dispatch, counter]);

  return (
    <div className="customerCard">
      {customer &&
        data
          ?.filter((forecast: IForecast) => forecast.userId === id)
          .map((forecast: IForecast) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={forecast?.forecastId}
            >
              <div className="card-header">
                {forecast?.forecastId} && {forecast?.price} <span>€</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{customer[0]?.id}</li>
                <li className="list-group-item">{customer[0]?.customerName}</li>
                <li className="list-group-item">{customer[0]?.address}</li>
              </ul>
            </div>
          ))}
    </div>
  );
};

export default Userforecasts2;
