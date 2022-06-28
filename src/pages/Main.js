import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Header from "../components/Header";
import AddModal from "../components/AddModal";
function Main() {
  return (
    <>
      <Header />
      <AddModal />
      <CardContainer>
        <Card />
      </CardContainer>
      <BtnAdd>
        <FontAwesomeIcon icon={faPlus} className="fa-2xl" />
      </BtnAdd>
    </>
  );
}
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(4, 300px);
  gap: 20px;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`;
const BtnAdd = styled.div`
  position: fixed;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 55px;
  background: #00092d;
  color: #103eff;
  bottom: 20px;
  left: 50%;
  z-index: 1;
  :hover {
    cursor: pointer;
    color: #cad7ff;
    background: #103eff;
    transition: 0.5s ease;
  }
`;
export default Main;
