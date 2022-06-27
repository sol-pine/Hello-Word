import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <>
      <CardItem>
        <BtnWrap>
          <BtnEdit>
            <FontAwesomeIcon icon={faCircleCheck} className="fa-xl" />
          </BtnEdit>
          <BtnDelete>
            <FontAwesomeIcon icon={faCircleXmark} className="fa-xl" />
          </BtnDelete>
        </BtnWrap>
        <CardTitle>단어</CardTitle>
        <br />
        <CardText>
          <CardMeaning>단어뜻</CardMeaning>
          <CardExample>단어예시</CardExample>
        </CardText>
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => (props.completed ? "#333" : "#fff")}; */
  :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px 0px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
`;
const BtnEdit = styled.div`
  margin-right: 10px;
  :hover {
    cursor: pointer;
    color: #081d92;
  }
`;
const BtnDelete = styled.div`
  :hover {
    cursor: pointer;
    color: #081d92;
  }
`;
const CardTitle = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  font-size: 28px;
  color: #111;
`;
const CardText = styled.div`
  width: 200px;
  height: 100px;
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
