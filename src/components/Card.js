import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { checkList, deleteList, getList } from "../redux/CardSlice";

function Card() {
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.Card.list);

  // 단어 로드
  useEffect(() => {
    dispatch(getList());
  }, []);
  // 단어 삭제
  const deleteWord = (id) => {
    dispatch(deleteList(id));
  };
  // 단어 체크
  const checkWord = (list) => {
    dispatch(checkList(list));
  };

  return (
    <>
      {wordList.map((list, idx) => {
        return (
          <CardItem key={idx} completed={list.completed}>
            <BtnEdit onClick={() => checkWord(list)} completed={list.completed}>
              Check!
            </BtnEdit>
            <TextWrap>
              <CardTitle completed={list.completed}>{list.word}</CardTitle>
              <CardMeaning completed={list.completed}>{list.mean}</CardMeaning>
            </TextWrap>
            <BtnDelete
              onClick={() => deleteWord(list.id)}
              completed={list.completed}
            >
              Delete!
            </BtnDelete>
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.completed ? "#222" : "#fff")};
`;
const BtnEdit = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  position: absolute;
  top: 0;
  width: 260px;
  height: 40px;
  background: #222;
  color: ${(props) => (props.completed ? "#25e282" : "#f9f9f9")};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${(props) => (props.completed ? "#f9f9f9" : "#25e282")};
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
  background: #222;
  color: ${(props) => (props.completed ? "#25e282" : "#f9f9f9")};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${(props) => (props.completed ? "#f9f9f9" : "#25e282")};
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

  color: ${(props) => (props.completed ? "#25e282" : "#222")};
`;

const CardMeaning = styled.div`
  font-size: 18px;
  text-align: justify;

  color: ${(props) => (props.completed ? "#25e282" : "#222")};
`;

export default Card;
