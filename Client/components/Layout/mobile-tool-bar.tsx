import Styles from "../../styles/NavigationBar.module.css";
import { useRouter } from "next/router";
import { RiHomeSmile2Line, RiHomeSmile2Fill } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";

function MobileToolBar() {
  const [homeActive, setHomeActive] = useState(true);
  const [favActive, setFavActive] = useState(false);

  const activeHome = () => {
    if (favActive) {
      setFavActive(false);
    }
    setHomeActive((previousHome) => {
      return !previousHome;
    });
  };

  const activeFavorite = () => {
    if (homeActive) {
      setHomeActive(false);
    }
    setFavActive((previousFavorite) => {
      return !previousFavorite;
    });
  };

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        <Link href="/home">
          {homeActive ? (
            <RiHomeSmile2Fill
              size="25"
              color="#000"
              onClick={() => activeHome()}
            />
          ) : (
            <RiHomeSmile2Line
              size="25"
              color="#000"
              onClick={() => activeHome()}
            />
          )}
        </Link>
      </div>
      <div className={`${Styles.bnTab}`}>
        <Link href="/favorites">
          {favActive ? (
            <AiFillHeart
              size="25"
              color="#000"
              onClick={() => activeFavorite()}
            />
          ) : (
            <AiOutlineHeart
              size="25"
              color="#000"
              onClick={() => activeFavorite()}
            />
          )}
        </Link>
      </div>
    </div>
  );
}

export default MobileToolBar;
