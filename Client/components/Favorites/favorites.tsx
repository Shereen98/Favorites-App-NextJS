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
  width: 75%;
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

const DescriptionWrapper = styled.div`
  p {
    text-align: justify;
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

  return (
    <Card key={product.id}>
      <ImageContainer>
        <img src={product.image} alt="Picture of the author" />
      </ImageContainer>
      <ImageTitle>
        <h4>{product.name}</h4>
        <LikeWrapper>
          <AiFillHeart size="18" color="#362579" />
          <p>32 Likes</p>
        </LikeWrapper>
        <button onClick={() => deleteFavoriteProduct(product.id)}>
          Remove
        </button>
      </ImageTitle>
    </Card>
  );
}

export default Favorite;
