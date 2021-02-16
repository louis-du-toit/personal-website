import React from "react";
import styled from "styled-components";

const StyledInDevelopment = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const InDevelopment = () => {
  return <StyledInDevelopment>In Development</StyledInDevelopment>;
};

export default InDevelopment;
