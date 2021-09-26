import styled from "styled-components";
import { useRouter } from "next/router";

const EmptyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 2%;
  font-family:dancing script;
  font-weight:bold;
  color:#757575c7;

  @media (min-width: 576px) {
    margin-left:35%;

    h3{
      font-size:200%;
    }
`;

function Empty() {
  return (
    <EmptyWrapper>
      <img src="empty/empty_new.png" alt="Empty" />
      <h3>Favorite list is Empty!</h3>
    </EmptyWrapper>
  );
}

export default Empty;
