import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 10px 10px;
  position: relative;
  margin-bottom: 18px;
  img {
    width: 100%;
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

const Favorite = ({ product }) => {
  return (
    <Card key={product.id}>
      <ImageContainer>
        <img src={product.image} alt="Picture of the author" />
        <ImageTitle>
          <h4>{product.name}</h4>
        </ImageTitle>
      </ImageContainer>
      <ProductDescription>
        <LikeWrapper>
          <AiFillHeart size="18" color="#362579" />
          <p>32 Likes</p>
        </LikeWrapper>
        <DescriptionWrapper>
          <p>{product.description}</p>
        </DescriptionWrapper>
        <CommentWrapper>
          <p>View 13 comments</p>
        </CommentWrapper>
      </ProductDescription>
    </Card>
  );
};

export default Favorite;
