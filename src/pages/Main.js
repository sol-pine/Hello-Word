import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import { addList } from "../redux/CardSlice";

function Main() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("HELLO WORD!");

  const wordRef = useRef(null);
  const meanRef = useRef(null);

  // 단어 추가
  function addWord() {
    const newWord = {
      word: wordRef.current.value,
      mean: meanRef.current.value,
    };
    dispatch(addList(newWord));
    setModal(false);
  }

  return (
    <>
      <Header
        onMouseEnter={() => {
          setMsg("+ add a word :)");
        }}
        onMouseLeave={() => {
          setMsg("HELLO WORD!");
        }}
        onClick={() => {
          setModal(true);
        }}
      >
        {msg}
      </Header>
      {modal === true ? (
        <>
          <Background>
            <Modal>
              <p>새롭게 알게 된 단어를 기록해보세요 ✍️</p>
              <input
                type="text"
                placeholder="단어를 입력하세요"
                ref={wordRef}
              ></input>
              <input
                type="text"
                placeholder="뜻을 입력하세요"
                ref={meanRef}
              ></input>
              <BtnWrap>
                <Btn
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <FontAwesomeIcon icon={faAngleLeft} className="fa-xl" />
                </Btn>
                <Btn
                  onClick={() => {
                    addWord();
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} className="fa-xl" />
                </Btn>
              </BtnWrap>
            </Modal>
          </Background>
        </>
      ) : null}
      <CardContainer>
        <Card />
      </CardContainer>
    </>
  );
}
// header
const Header = styled.div`
  width: 100%;
  height: 65px;
  background: #081d92;
  font-family: "IBMPlexSansKR-Bold";
  font-size: 25px;
  color: #25e282;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px 0px;
  :hover {
    cursor: pointer;
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(4, 300px);
  gap: 20px;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`;
// modal
const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
const Modal = styled.div`
  font-family: "IBMPlexSansKR-Bold";
  position: absolute;
  width: 450px;
  height: 300px;
  border-radius: 20px;
  background: #fff;
  padding: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px 0px;
  input {
    width: 280px;
    padding: 15px;
    margin: 10px;
    :focus {
      outline: none;
    }
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00092d;
  color: #f9f9f9;
  margin: 20px;
  :hover {
    color: #25e282;
    cursor: pointer;
    transition: 0.1s ease;
  }
`;
export default Main;
