import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 60px;
  position: fixed;
  z-index: 3;
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h1>Header</h1>
      </div>
    </HeaderWrapper>
  );
}
