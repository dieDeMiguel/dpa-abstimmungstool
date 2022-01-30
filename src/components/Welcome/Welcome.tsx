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
      <div className="modalWrapper">
        <form onSubmit={handleSubmit}>
          <h2>Willkommen beim DPA-Abstimmungstool</h2>
          <h2>
            Geben Sie Ihre Mitarbeiter-E-Mail ein, wir erinnern Sie daran, dass
            Sie nur einmal abstimmen können.
          </h2>
          <input
            type="text"
            className="text"
            onChange={(event) => handleChange(event)}
          />
          <button className="btn" type="submit">
            Anmelden
          </button>
        </form>
      </div>
    </WelcomeStyled>
  );
}
