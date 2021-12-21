import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {IUser, RootStore} from "../utils/TypeScript"
import {getUsers} from "../redux/actions/userAction"
import {Link} from "react-router-dom"




const Users = () => {
    const {data}  = useSelector((state: RootStore) => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers())
    }, [dispatch])
  return (
    <div>
      {
        data?.filter((user:IUser) => user.position === "Vertrieber").map((user:IUser) =>(
          <Link
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "18rem" }}
          key={user.userId}
          to={`/users/${user.userId}`}
          
        >
          <div className="card-header">{`${user.firstName} ${user.lastName}`}</div>
          <div className="card-body">
            <h5 className="card-title">{user.userId}</h5>
            <p className="card-text">
              Lorem Ipsum
            </p>
          </div>
        </Link>
        ))
      }
     
    </div>
  );
};

export default Users;
