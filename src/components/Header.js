import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>Hello Word!</Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 65px;
  background: #111;
  font-family: "IBMPlexSansKR-Bold";
  font-size: 25px;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;
export default Header;
