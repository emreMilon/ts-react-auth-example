import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "../redux/actions/customerAction";
import { IForecast, ICustomer, RootStore } from "../utils/TypeScript";

// for sales representative

const Userforecasts = () => {
  const [counter, setCounter] = useState(0);
  const [customerId, setCustomerId] = useState<string>("");
  const { data } = useSelector((state: RootStore) => state.forecast);
  const { user } = useSelector((state: RootStore) => state.auth);
  const { customerReducer } = useSelector((state: RootStore) => state);
  const customer: ICustomer | any = customerReducer?.data;
  const forecast = data
    ?.filter((forecast: IForecast | any) => forecast.userId === user?.userId)
    .map(({ customerId }) => customerId);

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
          ?.filter((forecast: IForecast) => forecast.userId === user?.userId)
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

export default Userforecasts;
