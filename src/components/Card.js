import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <>
      <CardItem>
        <BtnEdit>
          <FontAwesomeIcon icon={faCheck} className="fa-xl" />
        </BtnEdit>
        <TextWrap>
          <CardTitle>단어</CardTitle>
          <br />
          <CardMeaning>단어뜻</CardMeaning>
        </TextWrap>
        <BtnDelete>
          <FontAwesomeIcon icon={faXmark} className="fa-xl" />
        </BtnDelete>
      </CardItem>
    </>
  );
}

const CardItem = styled.div`
  width: 220px;
  height: 260px;
  border-radius: 20px;
  padding: 20px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => (props.completed ? "#333" : "#fff")}; */
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px 0px;
  }
`;

const BtnEdit = styled.div`
  position: absolute;
  top: 0;
  width: 260px;
  height: 35px;
  background: #cad7ff;
  color: #103eff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #cad7ff;
    background: #103eff;
    cursor: pointer;
    transition: 0.1s ease;
  }
`;
const BtnDelete = styled.div`
  position: absolute;
  bottom: 0;
  width: 260px;
  height: 35px;
  background: #cad7ff;
  color: #103eff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #cad7ff;
    background: #103eff;
    cursor: pointer;
    transition: 0.1s ease;
  }
`;
const TextWrap = styled.div`
  height: 200px;
`;
const CardTitle = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  font-size: 28px;
`;

const CardMeaning = styled.div`
  font-size: 18px;
  text-align: left;
`;

export default Card;
