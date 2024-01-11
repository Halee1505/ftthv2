import Navbar from "@/components/navbar";
import homeStyle from "@/style/home.module.css";
import style from "./style.module.css";
import Image from "next/image";
import data from "../../../../public/data/blog.json";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // read route params
  const { slug } = params;
  const blog = data.find((blog) => blog.slug === slug);
  if (!blog) return { title: "Not found" };
  return {
    title: blog.title,
    description: blog.description,
  };
}
const Blog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = data.find((blog) => blog.slug === slug);
  if (!blog) return <div>Not found</div>;
  return (
    <main className={homeStyle.main}>
      <section className={homeStyle.section1} id="homepage">
        <Navbar />
        <div className={style.content_overlay}>
          <div
            className={style.content}
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
        </div>
      </section>
      <div className={homeStyle.home_bg}>
        <Image src="/assets/internet2.jpeg" alt="Picture of the author" fill></Image>
      </div>
    </main>
  );
};

export default Blog;
