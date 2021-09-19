import Header from "./header";
import MobileToolBar from "./mobile-tool-bar";
import styled from "styled-components";

const Content = styled.div`
  margin: 60px 0px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
      <MobileToolBar />
    </Main>
  );
};

export default Layout;
