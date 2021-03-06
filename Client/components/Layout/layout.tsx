import Header from "./header";
import MobileToolBar from "./mobile-tool-bar";
import styled from "styled-components";
import Head from "next/head";
import Footer from "./footer";

const Content = styled.div`
  margin: 60px 0px;
  padding: 15px 15px;
  min-height: 76vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

//Layout used for all the pages
function Layout({ children }: any) {
  return (
    <Main>
      <Head>
        <title>NextJS - Favorites App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <MobileToolBar />
      <Footer />
    </Main>
  );
}

export default Layout;
