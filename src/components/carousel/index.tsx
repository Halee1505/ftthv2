"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import style from "./style.module.css";
const Carousel = (props: React.PropsWithChildren<any>) => {
  const [selected, setSelected] = useState(0);
  const [triggerScroll, setTriggerScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!Array.isArray(props.children) && props?.children?.length === 0) return;
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          handleSetSelected(0);
        } else {
          scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + clientWidth,
            behavior: "smooth",
          });
          handleSetSelected(Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth) + 1);
        }
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [props?.children?.length, triggerScroll]);

  const handleSetSelected = useCallback(
    (index: number) => {
      setTimeout(() => {
        setSelected(index);
      }, 200);
    },
    [selected]
  );

  return (
    <div className={style["carousel-overlay"]}>
      <div
        className={style["carousel-content"]}
        ref={scrollRef}
        //start scroll
        onTouchStart={() => {
          setTriggerScroll(true);
        }}
        //end scroll
        onTouchEnd={() => {
          setTriggerScroll(false);
        }}
        onScroll={(e) => {
          if (scrollRef.current) {
            setSelected(Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth));
          }
        }}
      >
        {props.children}
      </div>
      <ul className={style["carousel-ul"]}>
        {Array.isArray(props.children) &&
          props?.children?.map((_: unknown, index: number) => (
            <li className={style[`carousel-li${selected === index ? "-active" : ""}`]} key={index}></li>
          ))}
      </ul>
    </div>
  );
};

export default Carousel;
