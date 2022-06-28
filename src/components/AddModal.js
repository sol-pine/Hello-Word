import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

function AddModal() {
  return (
    <>
      <Background>
        <Modal>
          <p>새롭게 알게 된 단어를 기록해보세요 ✍️</p>
          <br />
          <input type="text" placeholder="단어를 입력하세요"></input>
          <input type="text" placeholder="뜻을 입력하세요"></input>
          <BtnWrap>
            <Btn onClick={() => {}}>
              <FontAwesomeIcon icon={faAngleLeft} className="fa-xl" />
            </Btn>
            <Btn onClick={() => {}}>
              <FontAwesomeIcon icon={faPlus} className="fa-xl" />
            </Btn>
          </BtnWrap>
        </Modal>
      </Background>
    </>
  );
}
const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;
const Modal = styled.div`
  position: absolute;
  width: 450px;
  height: 300px;
  border-radius: 20px;
  background: #fff;
  padding: 30px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 280px;
    padding: 15px;
    margin-bottom: 20px;
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
  background: #cad7ff;
  color: #103eff;
  margin: 20px;
  :hover {
    color: #cad7ff;
    background: #103eff;
    cursor: pointer;
    transition: 0.1s ease;
  }
`;
export default AddModal;
