"use client";
import { Product } from "@/interface/product";
import Card from "../card";
import style from "./style.module.css";
import { useEffect } from "react";
import React from "react";
interface SliderProps {
  items: Product[];
}

const Slider = (props: SliderProps) => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const slideInterVal = setInterval(
      () => {
        let newPos =
          sliderRef.current && sliderRef.current?.scrollLeft + 500 < sliderRef.current?.scrollWidth
            ? sliderRef.current?.scrollLeft + 500
            : 0;
        if (sliderRef.current && sliderRef.current?.scrollLeft + 500 < sliderRef.current?.scrollWidth) {
          sliderRef?.current?.scrollTo({ left: newPos, behavior: "smooth" });
        } else {
          sliderRef?.current?.scrollTo({ left: 0, behavior: "smooth" });
        }
      },

      5000
    );

    const items = Array.from(sliderRef.current?.children || []);
    items.forEach((item) => {
      item.addEventListener("mousedown", () => {
        clearInterval(slideInterVal);
      });
    });

    return () => {
      clearInterval(slideInterVal);
    };
  }, [sliderRef]);
  return (
    <section className={style.overlay}>
      <span
        className={style.arrow}
        onClick={() => {
          let newPos =
            sliderRef.current && sliderRef.current?.scrollLeft - 500 > 0
              ? sliderRef.current?.scrollLeft - 500
              : sliderRef.current?.scrollWidth;
          if (sliderRef.current && sliderRef.current?.scrollLeft - 500 > 0) {
            sliderRef?.current?.scrollTo({ left: newPos, behavior: "smooth" });
          } else {
            sliderRef?.current?.scrollTo({ left: 0, behavior: "smooth" });
          }
        }}
      >
        &lt;
      </span>
      <h2>Sản phẩm của Viettel</h2>
      <div className={style.slider} ref={sliderRef}>
        {props.items.map((product) => (
          <Card {...product} key={product.id}></Card>
        ))}
      </div>
      <span
        className={style.arrow}
        onClick={() => {
          let newPos =
            sliderRef.current && sliderRef.current?.scrollLeft + 500 < sliderRef.current?.scrollWidth
              ? sliderRef.current?.scrollLeft + 500
              : 0;
          if (sliderRef.current && sliderRef.current?.scrollLeft + 500 < sliderRef.current?.scrollWidth) {
            sliderRef?.current?.scrollTo({ left: newPos, behavior: "smooth" });
          } else {
            sliderRef?.current?.scrollTo({ left: 0, behavior: "smooth" });
          }
        }}
      >
        &gt;
      </span>
    </section>
  );
};

export default Slider;
