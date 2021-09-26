import styles from "../../styles/Home.module.css";
import { getFavoriteProducts } from "../../services/favoriteProductService";
import Favorite from "../../components/Favorites/favorites";
import Empty from "../../components/Favorites/empty";

export const getStaticProps = async () => {
  const data = await getFavoriteProducts();

  return {
    props: { products: data },
  };
};

const Favorites = ({ products }: any) => {
  console.log(products);
  return (
    <div className={styles.container}>
      {products.length == 0 ? (
        <Empty />
      ) : (
        products.map((product: any) => (
          <Favorite key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Favorites;
