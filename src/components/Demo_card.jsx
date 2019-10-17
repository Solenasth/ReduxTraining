import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  margin: 1em 0.5em;
  position: relative;
  padding: 0 1em 2em;
  width: 15em;
  height: 7em;
  background-color: white;
  border-radius: 0.4em;
  transition: all 0.3s ease-out;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: -16px;
    right: -16px;
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.23s ease-out;
  }
  &:hover:before {
    transform: scale(20);
  }
`;

const Go_corner = styled.div`
  transition: background-color 0.2s ease-out;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 2.5em;
  height: 2.5em;
  justify-content: center;
  align-items: center;
  background-color: #d76a5e;
  border-radius: 0 0.41em 0px 32px;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin-top: -0.5em;
  margin-right: -0.5em;
  color: white;
`;

const Greeting = styled.h1`
  color: rgb(23, 23, 23);
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Secret = styled(Greeting)`
  transition: color 0.5s ease-out;
  visibility: hidden;
  color: transparent;
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
  ${Card}:hover & {
    transition: color 0.5s visibility 0.5s ease-out;
    visibility: visible;
    color: white;
  }
`;

function Demo_card(props) {
  const { greeting, language } = props;
  return (
    <Card>
      <Greeting>{greeting}</Greeting>
      <Go_corner>
        <StyledIcon icon="dice-d20" />
      </Go_corner>
      <Secret>{language}</Secret>
    </Card>
  );
}

export default Demo_card;
