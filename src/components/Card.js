import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <>
      <CardItem>
        <CardTitle>단어</CardTitle>
        <br />
        <CardMeaning>단어뜻</CardMeaning>
        <CardExample>단어예시</CardExample>
      </CardItem>
    </>
  );
}
const CardItem = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 20px;
  padding: 20px;
  background: #fff;
  /* background-color: ${(props) => (props.completed ? "#333" : "#fff")}; */
  :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px 0px;
  }
`;
const CardTitle = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  font-size: 28px;
  color: #111;
`;
const CardMeaning = styled.div`
  font-size: 18px;
  text-align: left;
`;
const CardExample = styled.div`
  font-size: 18px;
  text-align: left;
  color: #081d92;
`;

export default Card;
