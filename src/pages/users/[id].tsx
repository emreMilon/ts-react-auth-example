import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {IUser, RootStore} from "../../utils/TypeScript"
import {getForecasts} from "../../redux/actions/forecastAction"
import Userforecasts from '../../components/Userforecasts'
import Userforecasts2 from '../../components/Userforecasts2'

const UserPage = () => {
    const {user} = useSelector((state:RootStore) => state.auth)
    const data : IUser | any = user

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getForecasts())
      }, [dispatch]);
    return (
        <>
        
        {data?.positon === "Vertrieber" ?  <Userforecasts /> : <Userforecasts2 />}
        </>
        
    )
}

export default UserPage
