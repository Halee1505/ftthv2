import { Product } from "@/interface/product";
import styles from "@/style/card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = (props: Product) => (
  <Link className={styles.card} href={`/product/${props.slug}`}>
    <div className={styles.image_overlay}>
      <Image src={props.imagePath} alt={props.desc} fill></Image>
    </div>
    <h2 className={styles.name}>{props.name}</h2>
    <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.desc }}></div>
    {/* <p>{props.descAdd}</p>
    <p>{props.descDevice}</p>
    <p>{props.descFee}</p>
    <p>{props.descTv1}</p>
    <p>{props.descTv2}</p>
    <p>{props.descUsed}</p> */}
  </Link>
);
export default Card;
