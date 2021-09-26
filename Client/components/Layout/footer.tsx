import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 100px;
  background-color: #e0e0e05c;
  color: #0b312e;
  text-align: center;
  padding: 40px 0;
  font-size: 15px;
  width: 100%;

  @media (max-width: 576px) {
    display: none;
  }
`;

export default function Footer() {
  return <FooterWrapper>&copy;2021 WestBay. All Rights Reserved</FooterWrapper>;
}
