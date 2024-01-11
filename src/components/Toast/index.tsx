"use client";
import React from "react";
import style from "./style.module.css";

const Toast = ({ show, type }: { show: boolean; type?: "success" | "warning" | "error" }) => {
  return (
    <div className={style.toast + " " + (show ? style.active : "")}>
      {type === "success" && <div className={style.success}>Đăng ký thành công</div>}
      {type === "warning" && <div className={style.warning}>Vui lòng nhập đầy đủ thông tin</div>}
      {type === "error" && <div className={style.error}>Đăng ký thất bại</div>}
    </div>
  );
};

const useToast = () => {
  const [toast, setToast] = React.useState<{ show: boolean; type?: "success" | "warning" | "error" }>({
    show: false,
    type: undefined,
  });

  const open = (type: "success" | "warning" | "error") => {
    setToast({ show: true, type });
    setTimeout(() => {
      setToast({ show: false, type });
    }, 2000);
  };

  const close = () => {
    setToast({ show: false, type: undefined });
  };

  return { open, close, toast };
};

export { Toast, useToast };
