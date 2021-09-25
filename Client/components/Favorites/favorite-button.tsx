import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = ({ state }) => {
  const Heart = state === false ? AiOutlineHeart : AiFillHeart;
  return <Heart size="30" color="#d81b60" />;
};

export default FavoriteButton;
