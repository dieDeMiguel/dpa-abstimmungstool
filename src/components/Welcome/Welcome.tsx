/* eslint-disable @typescript-eslint/no-explicit-any */
import e from "express";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import WelcomeStyled from "./Welcome.styled";

interface UserName {
  username: string | null;
}

interface ErrorMessage {
  username: string | null;
}

export default function Welcome() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<UserName>();
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | string>();

  const handleChange = (event: any) => {
    const sanitizedValue = event.target.value.trim().toLowerCase();
    setUserName(sanitizedValue);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (userName === undefined || userName === null || !userName) {
      setErrorMessage("Benutzername wird benötigt");
      return;
    }

    axios.get(`/api/user/${userName}`).then((result) => {
      if (result.data.result.length === 0) {
        axios.post("/api/user", { username: userName }).then((createdUser) => {
          navigate("/vote", { state: createdUser.data[0] });
        });
      } else {
        setErrorMessage(
          "Sie haben bereits abgestimmt, Sie können nur einmal abstimmen"
        );
      }
    });
  };
  return (
    <WelcomeStyled>
      <div className="welcomeWrapper">
        <form onSubmit={handleSubmit} className="welcomeForm">
          <h1>Willkommen beim DPA-Abstimmungstool</h1>
          <p>
            Tragen Sie bitte Ihre Mitarbeiter-E-Mail ein. Sie können nur einmal
            abstimmen.
          </p>

          <input
            type="text"
            className="inputText"
            onChange={(event) => handleChange(event)}
          />
          {errorMessage && <p>{errorMessage}</p>}
          <button className="btn" type="submit">
            Anmelden
          </button>
        </form>
      </div>
    </WelcomeStyled>
  );
}
