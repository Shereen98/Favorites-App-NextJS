import { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Product from "../../components/Products/product";
import { getAllProducts } from "../../services/productService";

export const getStaticProps = async () => {
  const data = await getAllProducts();
  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      {products && products.map((product) => <Product product={product} />)}
    </div>
  );
};

export default Products;
