import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import {
  addToFavorite,
  deleteFavorite,
} from "../../services/favoriteProductService";
import { useRouter } from "next/router";
import FavoriteButton from "../Favorites/favorite-button";
import { ProductInterface } from "../../interface/ProductInterface";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 18px;
  border-radius: 10px;
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
  background-color: #eeeeeead;
`;
const ImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #c0c0c094;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductDescription = styled.div`
  top: 8px;
  bottom: 8px;
`;

const LikeWrapper = styled.div`
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

const CommentWrapper = styled.div`
  p {
    color: #808080bf;
    font-size: 10px;
  }
`;

const FavButton = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  line-height: 0px;
  background: white;
  border-width: 0;
  box-shadow: 0 3px 10px 0 rgba(0.5, 0.5, 0.5, 0.5);
`;

function Product({ product }: ProductInterface) {
  //
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

  async function submitFavorite(id: string, isLiked: boolean) {
    const data = isLiked ? await deleteFavorite(id) : await addToFavorite(id);
    refreshData();
  }

  return (
    <Card key={product.id}>
      <ImageContainer>
        <img src={product.image} alt="Picture of the author" />
        <ImageTitle key={product.id}>
          <h4>{product.name}</h4>
          <FavButton
            onClick={() =>
              submitFavorite(product.id, product.isLiked as booleajn)
            }
          >
            <FavoriteButton state={product.isLiked} />
          </FavButton>
        </ImageTitle>
      </ImageContainer>
      <ProductDescription>
        <LikeWrapper>
          <AiFillHeart size="18" color="#362579" />
          <p>{product.numberOfLikes} Likes</p>
        </LikeWrapper>
        <DescriptionWrapper>
          <p>{product.description}</p>
        </DescriptionWrapper>
        <CommentWrapper>
          <p>View {product.numberOfComments} comments</p>
        </CommentWrapper>
      </ProductDescription>
    </Card>
  );
}

export default Product;
