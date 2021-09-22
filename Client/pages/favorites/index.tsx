import styles from "../../styles/Home.module.css";
import { getFavoriteProducts } from "../../services/favoriteProductService";
import Favorite from "../../components/Favorites/favorites";

export const getStaticProps = async () => {
  const data = await getFavoriteProducts();
  return {
    props: { products: data },
  };
};

const Favorites = ({ products }) => {
  return (
    <div className={styles.container}>
      {products && products.map((product) => <Favorite product={product} />)}
    </div>
  );
};

export default Favorites;
