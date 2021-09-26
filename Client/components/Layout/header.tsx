import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo/logo.png";

const HeaderWrapper = styled.div`
  height: 60px;
  position: fixed;
  z-index: 3;
  width: 100%;
  display: flex;
  padding: 5px 0px;
  align-items: center;
  justify-content: space-between;
  background-color: #0b312e;

  @media (min-width: 576px) {
    height: 75px;
  }
`;

const Logo = styled.div`
  text-align: left;
  margin-top: 5px;
  float: left;
  padding: 5px 9px;
  width: 40%;

  img {
    width: 100%;
  }

  @media (min-width: 576px) {
    width: 15%;
    padding: 15px 29px;

    img {
      width: 90%;
    }
  }
`;

const Search = styled.div`
  display: inline-block;
  padding-right: 14px;
  width: 55%;

  input[type="text"] {
    border: 0;
    border-radius: 5px;
    float: right;
    width: 100%;
    padding: 5px 6px;
  }

  @media (min-width: 576px) {
    width: 65%;
    input[type="text"] {
      padding: 10px 15px;
      float: left;
      width: 100%;
      font-size: 15px;
    }
  }
`;

const PageLinks = styled.div`
  color: white;
  display: flex;
  width: 20%;
  font-size: 15px;

  @media (max-width: 576px) {
    display: none;
  }

  .navBtn {
    text-align: center;
    width: 100%;
  }

  .navBtn :hover {
    color: #ffeb3b;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="logo/logo_new.png" alt="Logo" />
      </Logo>
      <Search>
        <input
          type="text"
          name="searchbar"
          placeholder="What are you looking for?"
        />
      </Search>
      <PageLinks>
        <div className="navBtn">
          <Link href="/home">Home</Link>
        </div>
        <span>|</span>
        <div className="navBtn">
          <Link href="/favorites">Favorites</Link>
        </div>
      </PageLinks>
    </HeaderWrapper>
  );
}
