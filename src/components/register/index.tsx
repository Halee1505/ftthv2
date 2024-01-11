"use client";
import React from "react";
import { Toast, useToast } from "../Toast";
import Loading, { useLoading } from "../Loading";
import style from "./style.module.css";
const Register = () => {
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
  });

  const { open, toast } = useToast();
  const { open: openLoading, close: closeLoading, show: showLoading } = useLoading();
  const handleSignUp = async () => {
    if (!info.name || !info.phone) {
      open("warning");
      return;
    }
    const data = new FormData();
    data.append("name", info.name);
    data.append("phone", info.phone);
    openLoading();
    const response = await fetch("/api/sendmail", {
      method: "post",
      body: data,
    });

    closeLoading();
    if (!response.ok) {
      open("error");
    }
    open("success");
  };

  return (
    <div className={style.register}>
      <Toast show={toast.show} type={toast.type} />
      <Loading show={showLoading} />
      <div className={style.register_content}>
        <div className={style.register_header}>
          <h3>
            Nhận tư vấn <span>miễn phí !</span>
          </h3>
        </div>
        <div className={style.register_body}>
          <div className={style.form}>
            <div className={style.form_group}>
              <label htmlFor="name">
                Họ và tên <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => {
                  setInfo({ ...info, name: e.target.value });
                }}
                value={info.name}
                className={info.name.length > 0 ? style.success_input : ""}
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="phone">
                Số điện thoại <span>*</span>
              </label>
              <input
                type="text"
                id="phone"
                className={
                  info.phone.length > 0 && info.phone.length < 10
                    ? style.error_input
                    : info.phone.length === 10
                    ? style.success_input
                    : ""
                }
                onChange={(e) => {
                  if (isNaN(Number(e.target.value))) {
                    return;
                  }
                  if (e.target.value.length > 10) {
                    return;
                  }
                  setInfo({ ...info, phone: e.target.value });
                }}
                value={info.phone}
              />
            </div>
            <div className={style.form_group}>
              <button
                className={style.submit_btn}
                onClick={() => {
                  handleSignUp();
                }}
              >
                Nhận tư vấn miễn phí !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
