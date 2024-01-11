import React from "react";
import style from "./style.module.css";

const Loading = ({ show }: { show: boolean }) => {
  return (
    <div className={show ? style.active : ""}>
      <div className={style["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export const useLoading = () => {
  const [show, setShow] = React.useState(false);

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  return { open, close, show };
};
export default Loading;
