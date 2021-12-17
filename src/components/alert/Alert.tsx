import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import Loading from "./Loading";
import Toast from "./Toast";

export const Alert = () => {
  const alert = useSelector((state: RootStore) => state.alert);

  return (
    <div className="loading">
      {alert.loading && <Loading />}
      {alert.errors && <Toast body={alert?.errors} title="Error" />}
      {alert.success && <Toast body={alert?.success} title="Success" />}
    </div>
  );
};

export const showErrMsg = (msg: string) => {
  return <div className="errMsg">{msg}</div>;
};

export const showSuccessMsg = (msg: string) => {
  return <div className="successMsg">{msg}</div>;
};
