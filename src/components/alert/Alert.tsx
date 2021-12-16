import { useSelector } from "react-redux";
import { RootStore } from '../../utils/TypeScript'
import Loading from "./Loading";
import Toast from "./Toast";

const Alert = () => {
  const alert = useSelector((state: RootStore) => state.alert);

  return (
    <div className="loading">
      {alert.loading && <Loading />}
      {alert.errors && <Toast body={alert?.errors} title="Error" />}
      {alert.success && <Toast body={alert?.success} title="Success" />}
    </div>
  );
};

export default Alert;