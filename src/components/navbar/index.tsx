"use client";
import Link from "next/link";
import style from "./style.module.css";
import React from "react";
const Navbar = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <div className={style.logo}>
        <Link href="/">
          <img src="/assets/logo.png" alt="Viettel logo" />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          width="800px"
          height="800px"
          viewBox="0 -2 28 28"
          onClick={() => {
            setShow(!show);
          }}
        >
          <path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
          <path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
          <path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
        </svg>
      </div>

      <nav className={style.nav + " " + (show ? style.active : "")}>
        <ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            className={style.close}
            onClick={() => {
              setShow(!show);
            }}
          >
            <path
              id="Vector"
              d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <li>
            <Link
              href="/#homepage"
              onClick={() => {
                setShow(!show);
              }}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              href="/#intro"
              onClick={() => {
                setShow(!show);
              }}
            >
              Giới thiệu dịch vụ
            </Link>
          </li>
          <li>
            <Link
              href="/#product"
              onClick={() => {
                setShow(!show);
              }}
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              onClick={() => {
                setShow(!show);
              }}
            >
              Liên hệ
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
