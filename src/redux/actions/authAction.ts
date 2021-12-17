import { Dispatch } from "redux";
import { AUTH, IAuthType } from "../types/authType";
import { ALERT, IAlertType } from "../types/alertType";

import { IUserLogin, IUserRegister } from "../../utils/TypeScript";
import { postAPI } from "../../utils/FetchData";
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
      console.log(res.data.message);
      dispatch({ type: ALERT, payload: { success: res.data.message } });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } });
    }
  };
