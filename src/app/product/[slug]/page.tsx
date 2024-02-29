import Navbar from "@/components/navbar";
import homeStyle from "@/style/home.module.css";
import style from "@/style/product.module.css";
import Image from "next/image";
import data from "../../../../public/data/data.json";
import { formatPrice } from "@/utils/func";
import PriceOption from "@/components/priceOption";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const product = data.data.list.find((product) => product.slug === slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: product.desc,
    keywords: [
      "Viettel",
      "telecom",
      "mạng di động",
      "internet",
      "truyền hình",
      "dịch vụ số",
      "viettel",
      "247",
      "gói cước",
      "24/7",

      product.name,
      product.subFee,
      product.bandwidth,
    ],
  };
}
const Product = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const product = data.data.list.find((product) => product.slug === slug);
  if (!product) return <div>Not found</div>;
  return (
    <main className={homeStyle.main}>
      <section className={homeStyle.section1} id="homepage">
        <Navbar />
        <div className={style.content_overlay}>
          <div className={style.content}>
            <Image src={product.imagePath} alt="Product image" width={350} height={350}></Image>
            <div>
              <div className={style.header}>
                <div>
                  <Image
                    src="https://vietteltelecom.vn/images_content/ic-it-pack-1.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  ></Image>
                  <div>
                    <span>Tên gói</span>
                    <span>{product.name}</span>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://vietteltelecom.vn/images_content/ic-it-pack-2.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  ></Image>
                  <div>
                    <span>Giá gói</span>
                    <span>{formatPrice(product.subFee)}</span>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://vietteltelecom.vn/images_content/ic-it-pack-4.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  ></Image>
                  <div>
                    <span>Tốc độ</span>
                    <span>{product.bandwidth}</span>
                  </div>
                </div>
              </div>
              <div className={style.info}>
                <div className={style.text}>
                  <strong>Đối tượng sử dụng</strong>
                  <div dangerouslySetInnerHTML={{ __html: product.desc }}></div>
                </div>
                <PriceOption name={product.name} price={product.subFee} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={homeStyle.home_bg}>
        <Image src="/assets/internet2.jpeg" alt="Picture of the author" fill></Image>
      </div>
    </main>
  );
};

export default Product;
