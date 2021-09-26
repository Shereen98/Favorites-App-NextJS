import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = ({ state }: any) => {
  const Heart = state === false ? AiOutlineHeart : AiFillHeart;
  return <Heart size="22" color="#d81b60" />;
};

export default FavoriteButton;
