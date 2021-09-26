import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo/logo.png";

const FooterWrapper = styled.div`
  height: 100px;
  background-color: #0b312e;
  color: #ffeb3b;
  text-align: center;
  padding: 40px 0;
  font-size: 15px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export default function Footer() {
  return <FooterWrapper>&copy;2021 WestBay. All Rights Reserved</FooterWrapper>;
}
