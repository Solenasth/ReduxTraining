import React, { useState, useEffect } from "react";
import Demo_card from "../components/Demo_card.jsx";
import styled from "styled-components";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";

const Demo_card_container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
`;

function Demo(props) {
  const [greetings, setGreetings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/greeting")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        setGreetings(data);
        setLoading(false);
      });
  }, []);

  // const getRandomInt = (min, max) => {
  //   return Math.floor(Math.random() * (max - min)) + min;
  // };
  // function getRandomGreeting() {
  //   return greetings[getRandomInt(0, greetings.length)];
  // }

  return (
    <Demo_card_container>
      {greetings.map(card => {
        return loading ? (
          <h1>Now Loading</h1>
        ) : (
          <Demo_card
            greeting={card.greeting}
            language={card.lang}
            key={card.greeting + card.lang}
          />
        );
      })}
    </Demo_card_container>
  );
}

export default Demo;
