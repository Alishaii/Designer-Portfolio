import React from "react";
import { ErrorPageContainer, MainPageLink, TextContainer } from "./styles";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <TextContainer>
        Ooops... Let's return to the{" "}
        <MainPageLink>
          <Link to="/">Main Page</Link>
        </MainPageLink>
      </TextContainer>
    </ErrorPageContainer>
  );
};
