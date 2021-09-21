import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 25px 10px;
  position: relative;
  img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
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

const Product = () => {
  return (
    <Card>
      <ImageContainer>
        <img src="../Products/3.jpeg" alt="Picture of the author" />
        <ImageTitle>
          <h4>Nunc ullamcorper facilisis ligula vel facilisis. Pellentesque</h4>
          <AiOutlineHeart size="30" color="#FF6347" />
        </ImageTitle>
      </ImageContainer>
      <ProductDescription>
        <LikeWrapper>
          <AiFillHeart size="18" color="#362579" />
          <p>32 Likes</p>
        </LikeWrapper>
        <DescriptionWrapper>
          <p>
            Nunc ullamcorper facilisis ligula vel facilisis. Pellentesque
            venenatis sapien justo, vitae placerat libero luctus eu. Aliquam
            tempus mauris nec leo fringilla maximus. Duis ac dui vel neque
            viverra malesuada.
          </p>
        </DescriptionWrapper>
        <CommentWrapper>
          <p>View 13 comments</p>
        </CommentWrapper>
      </ProductDescription>
    </Card>
  );
};

export default Product;
