import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, getList } from "../redux/CardSlice";

function Card() {
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.Card.list);

  useEffect(() => {
    dispatch(getList());
  }, []);
  function checkWord() {}
  const deleteWord = (id) => {
    dispatch(deleteList(id));
  };

  return (
    <>
      {wordList.map((list, idx) => {
        return (
          <CardItem key={idx}>
            <BtnEdit onClick={checkWord()}>Check!</BtnEdit>
            <TextWrap>
              <CardTitle>{list.word}</CardTitle>
              <CardMeaning>{list.mean}</CardMeaning>
            </TextWrap>
            <BtnDelete onClick={() => deleteWord(list.id)}>Delete!</BtnDelete>
          </CardItem>
        );
      })}
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
`;
const BtnEdit = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  position: absolute;
  top: 0;
  width: 260px;
  height: 40px;
  background: #081d92;
  color: #f9f9f9;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #25e282;
    cursor: pointer;
    transition: 0.1s ease;
  }
`;
const BtnDelete = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  position: absolute;
  bottom: 0;
  width: 260px;
  height: 40px;
  background: #081d92;
  color: #f9f9f9;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #25e282;
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
  text-align: center;
  margin: 5px;
`;

const CardMeaning = styled.div`
  font-size: 18px;
  text-align: justify;
`;

export default Card;
