import styles from "../../styles/Home.module.css";
import { getFavoriteProducts } from "../../services/favoriteProductService";
import Favorite from "../../components/Favorites/favorites";
import { ProductInterface } from "../../interface/ProductInterface";

export const getStaticProps = async () => {
  const data = await getFavoriteProducts();
  return {
    props: { products: data },
  };
};

const Favorites = ({ products }: any) => {
  return (
    <div className={styles.container}>
      {products &&
        products.map((product: any) => <Favorite product={product} />)}
    </div>
  );
};

export default Favorites;
