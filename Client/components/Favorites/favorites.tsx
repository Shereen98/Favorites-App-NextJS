import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ProductInterface } from "../../interface/ProductInterface";
import { useRouter } from "next/router";
import { deleteFavorite } from "../../services/favoriteProductService";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 18px;
  display: flex;
  img {
    width: 100%;
  }

  @media (min-width: 576px) {
    width: calc(25% - 16px);
    display: flex;
    flex-wrap: wrap;
    margin: 8px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 35%;
  background-color: #eeeeeead;
  border-radius: 20px;
`;
const ImageTitle = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  padding: 0px 5px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  width: 65%;

  h3 {
    margin: 0;
  }

  @media (min-width: 576px) {
    h3 {
      font-size: 150%;
    }
  }
`;

const ProductDescription = styled.div`
  top: 8px;
  bottom: 8px;
`;

const LikeWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: center;

  p {
    color: #362579;
    padding: 0px 5px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 30px;
    border-radius: 5px;
    border: 0;
    background-color: #f44336;
    color: white;
    font-weight: bold;
  }
`;

function Favorite({ product }: ProductInterface) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(
      {
        pathname: router.asPath,
      },
      undefined,
      { scroll: false }
    );
  };

  async function deleteFavoriteProduct(id: string) {
    const data = await deleteFavorite(id);
    refreshData();
  }

  return product.id != "" ? (
    <Card>
      <ImageContainer>
        <img src={product.image} alt="Picture of the author" />
      </ImageContainer>
      <ImageTitle>
        <h3>{product.name}</h3>
        <CardFooter>
          <LikeWrapper>
            <AiFillHeart size="18" color="#362579" />
            <p>32 Likes</p>
          </LikeWrapper>
          <button onClick={() => deleteFavoriteProduct(product.id)}>
            Remove
          </button>
        </CardFooter>
      </ImageTitle>
    </Card>
  ) : (
    <div>No item</div>
  );
}

export default Favorite;
