import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Header from "../components/Header";

function Main() {
  return (
    <>
      <Header />
      <CardContainer>
        <Card />
      </CardContainer>
    </>
  );
}
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(4, 260px);
  gap: 20px;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`;
export default Main;
