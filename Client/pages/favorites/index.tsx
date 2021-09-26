import styles from "../../styles/Home.module.css";
import { getFavoriteProducts } from "../../services/favoriteProductService";
import Favorite from "../../components/Favorites/favorites";

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
        products.map((product: any) => (
          <Favorite key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Favorites;
