import elementStyle from "@/style/home.module.css";
import Image from "next/image";

import Slider from "@/components/slider";
import { Product } from "@/interface/product";
import data from "../../public/data/data.json";
import Navbar from "@/components/navbar";
import Introduce from "@/components/introduce";
import type { Metadata } from "next";
import Register from "@/components/register";
import Footer from "@/components/Footer";
import Carousel from "@/components/carousel";

export const metadata: Metadata = {
  title: "Viettel Telecom",
  description: "Viettel Telecom",
};

const Home = async () => {
  const products = data.data.list as unknown as Product[];
  return (
    <main className={elementStyle.main}>
      <section className={elementStyle.section1} id="homepage">
        <Navbar />
        <div className={elementStyle.banner_overlay}>
          <h1>Viettel Telecom – Nhà cung cấp Dịch vụ di động, Internet, Truyền hình và Giải pháp CNTT</h1>
          <div className={elementStyle.banner}>
            <Carousel>
              <div className={elementStyle.banner_item}>
                <Image src="/assets/banner/h1.webp" alt="Picture of the author" fill></Image>
              </div>
              <div className={elementStyle.banner_item}>
                <Image src="/assets/banner/h2.webp" alt="Picture of the author" fill></Image>
              </div>
              <div className={elementStyle.banner_item}>
                <Image src="/assets/banner/h3.webp" alt="Picture of the author" fill></Image>
              </div>
              <div className={elementStyle.banner_item}>
                <Image src="/assets/banner/h4.webp" alt="Picture of the author" fill></Image>
              </div>
            </Carousel>
          </div>
          <Image
            src="/assets/logo.png"
            alt="Viettel logo"
            className={elementStyle.logo}
            height={544 * 0.2}
            width={2560 * 0.2}
          ></Image>
        </div>
        {/* <div className={elementStyle.icon1}></div> */}
        {/* <Image src="/assets/model.png" alt="Viettel model" fill className={elementStyle.model}></Image> */}
      </section>
      <div className={elementStyle.home_bg}>
        <Image src="/assets/internet2.jpeg" alt="Picture of the author" fill></Image>
      </div>
      <section className={elementStyle.section3} id="product">
        <Slider items={products} />
      </section>
      <section className={elementStyle.section2} id="intro">
        <Introduce />
      </section>
      <section id="contact">
        <Register />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
