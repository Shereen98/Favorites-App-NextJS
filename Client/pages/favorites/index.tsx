import styles from "../../styles/Home.module.css";
import { getFavoriteProducts } from "../../services/favoriteProductService";
import Favorite from "../../components/Favorites/favorites";
import Empty from "../../components/Favorites/empty";

//Fetch favorite products and pass to page component as props
export const getStaticProps = async () => {
  const data = await getFavoriteProducts();

  return {
    props: { products: data },
  };
};

const Favorites = ({ products }: any) => {
  return (
    <div className={styles.container}>
      {/* Render component based on products array length */}
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
