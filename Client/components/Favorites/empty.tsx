import styled from "styled-components";

const EmptyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 2%;
  font-family:dancing script;
  font-weight:bold;
  color:#0b312e;

  @media (min-width: 576px) {
    width:40%;
    margin-left:30%;

    h3{
      font-size:200%;
    }
`;

function Empty() {
  return (
    <EmptyWrapper>
      <img src="empty/empty.png" alt="Empty" />
      <h3>Favorite list is Empty!</h3>
    </EmptyWrapper>
  );
}

export default Empty;
