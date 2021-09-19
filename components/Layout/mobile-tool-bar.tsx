import Styles from "../../styles/NavigationBar.module.css";
import { useRouter } from "next/router";
import { RiHomeSmile2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const MobileToolBar = () => {
  const router = useRouter();

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        <Link href="/home">
          <RiHomeSmile2Line size="25" color="#000" />
        </Link>
      </div>
      <div className={`${Styles.bnTab}`}>
        <Link href="/favorites">
          <AiOutlineHeart size="25" color="#000" />
        </Link>
      </div>
    </div>
  );
};

export default MobileToolBar;
