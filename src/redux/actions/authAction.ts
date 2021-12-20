import { Dispatch } from "redux";
import { AUTH, IAuthType } from "../types/authType";
import { ALERT, IAlertType } from "../types/alertType";

import { IUserLogin, IUserRegister } from "../../utils/TypeScript";
import { postAPI, getAPI } from "../../utils/FetchData";
import { validRegister } from "../../utils/Valid";

export const login =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });

      const res = await postAPI("login", userLogin);

      dispatch({
        type: AUTH,
        payload: res.data,
      });
    
      dispatch({ type: ALERT, payload: { success: res.data.message } });
      localStorage.setItem("refresh", "milonGroup");
      localStorage.setItem("logged", res.data.access_token)
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } });
    }
  };

export const register =
  (userRegister: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const check: any = validRegister(userRegister);
    if (check.errLength > 0)
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    try {
      dispatch({ type: ALERT, payload: { loading: true } });
      const res = await postAPI("/register", userRegister);
      dispatch({ type: AUTH, payload: res.data})
      dispatch({ type: ALERT, payload: { success: res.data.message } });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } });
    }
  };

export const refreshToken =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const refresh = localStorage.getItem("refresh");
    if (refresh !== "milonGroup") return;
    try {
      dispatch({ type: ALERT, payload: { loading: false } });
      const res = await getAPI("refresh_token");
      dispatch({ type: AUTH, payload: res.data });
      localStorage.setItem("logged", res.data.access_token);
    } catch (error: any) {
      dispatch({ type: ALERT, payload: error.response.data.message });
    }
  };

export const logOut =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      localStorage.removeItem("logged");
      localStorage.removeItem("refresh")
      getAPI("/logout");
      window.location.href = "/";
    } catch (error: any) {
      dispatch({ type: ALERT, payload: error.response.data.message });
    }
  };


