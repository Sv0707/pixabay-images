import Spinner from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Spinner type="Circles" color="#3f51b5" height={200} width={200} />
    </div>
  );
};

export default Loader;
