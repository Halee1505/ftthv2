"use client";

import { formatPrice } from "@/utils/func";
import Image from "next/image";
import React from "react";
import Loading, { useLoading } from "../Loading";
import style from "./style.module.css";
import { Toast, useToast } from "../Toast";
const PriceOption = ({ name, price }: { name: string; price: number | string }) => {
  const [priceOption, setPriceOption] = React.useState("per-month");
  const [showPopUp, setShowPopUp] = React.useState(false);
  const { open, toast } = useToast();
  return (
    <div>
      <Toast show={toast.show} type={toast.type} />
      <div className={style.price_option}>
        <div>
          <Image
            src="https://vietteltelecom.vn/images_content/ic-it-pack-3.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          ></Image>
          <strong>Phương án đóng cước</strong>
        </div>
        <ul className={style.option}>
          <li onClick={() => setPriceOption("per-month")}>
            <div className={style.dot + " " + (priceOption === "per-month" ? style.active : "")}></div>
            Đóng hàng tháng
          </li>
          <li
            onClick={() => {
              if (priceOption === "per-month") {
                setPriceOption("six-month");
              }
            }}
          >
            <div className={style.dot + " " + (priceOption !== "per-month" ? style.active : "")}></div>
            Đóng cước trước
          </li>
        </ul>
        {priceOption !== "per-month" && (
          <ul className={style.child_option}>
            <li
              className={priceOption === "six-month" ? style.active : ""}
              onClick={() => {
                setPriceOption("six-month");
              }}
            >
              <span>Đóng trước 6 tháng</span>
              <span>{formatPrice(Number(price) * 6)}</span>
              <i>Khuyến mãi 01 tháng</i>
            </li>
            <li
              className={priceOption === "twelve-month" ? style.active : ""}
              onClick={() => {
                setPriceOption("twelve-month");
              }}
            >
              <span>Đóng trước 12 tháng</span>
              <span>{formatPrice(Number(price) * 12)}</span>
              <i>Khuyến mãi 02 tháng</i>
            </li>
          </ul>
        )}
        <button
          className={style.contact_btn}
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          Liên hệ ngay
        </button>
        <PopUp show={showPopUp} setShow={setShowPopUp} productName={name} option={priceOption} openToast={open} />
      </div>
    </div>
  );
};

export default PriceOption;

const PopUp = ({
  show,
  setShow,
  option,
  productName,
  openToast,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
  option: string;
  productName: string;
  openToast?: (type: "success" | "warning" | "error") => void;
}) => {
  const [info, setInfo] = React.useState({
    name: "",
    phone: "",
    // address: "",
    // note: "",
    productName,
    priceOption: option,
  });

  React.useEffect(() => {
    setInfo({ ...info, priceOption: option });
  }, [option]);

  const { open: openLoading, close: closeLoading, show: showLoading } = useLoading();
  const handleSignUp = async () => {
    if (!info.name || !info.phone) {
      openToast && openToast("warning");
      // alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    const data = new FormData();
    data.append("name", info.name);
    data.append("phone", info.phone);
    // data.append("address", info.address);
    // data.append("note", info.note);
    data.append("productName", info.productName);
    data.append("priceOption", info.priceOption);
    openLoading();
    const response = await fetch("/api/sendmail", {
      method: "post",
      body: data,
    });

    closeLoading();
    if (!response.ok) {
      openToast && openToast("error");
    }
    setShow(false);
    console.log("response", response);
    openToast && openToast("success");
  };
  return (
    <div className={style.popup + " " + (show ? style.active : "")}>
      <Loading show={showLoading} />
      <div className={style.popup_content + " " + (show ? style.active : "")}>
        <div className={style.popup_header}>
          <h3>Thông tin liên hệ</h3>
          <span
            onClick={() => {
              setShow(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <g id="Menu / Close_MD">
                <path
                  id="Vector"
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </span>
        </div>
        <div className={style.popup_body}>
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
            {/* <div className={style.form_group}>
              <label htmlFor="address">
                Địa chỉ <span>*</span>
              </label>
              <input
                type="text"
                id="address"
                className={info.address.length > 0 ? style.success_input : ""}
                onChange={(e) => {
                  setInfo({ ...info, address: e.target.value });
                }}
                value={info.address}
              />
            </div>

            <div className={style.form_group}>
              <label htmlFor="note">Ghi chú</label>
              <textarea
                id="note"
                onChange={(e) => {
                  setInfo({ ...info, note: e.target.value });
                }}
                value={info.note}
              ></textarea>
            </div> */}
            <div className={style.form_group}>
              <button
                className={style.submit_btn}
                onClick={() => {
                  handleSignUp();
                }}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
