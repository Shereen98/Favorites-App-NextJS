import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Details about product {productId}</h1>
      </main>
    </div>
  );
};

export default ProductDetail;
