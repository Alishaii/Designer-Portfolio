import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { Footer } from "../../components/Footer";
import { Heading } from "../../components/Heading";
import { Introduction } from "../../components/Introduction";
import { MainInfo } from "../../components/MainInfo";
import { MainInfoMobile } from "../../components/MainInfoMobile";
import { MainPageContainer } from "./styles";

interface MainPageProps {
  windowWidth: number;
}

export const MainPage: React.FC<MainPageProps> = ({ windowWidth }) => {
  return (
    <MainPageContainer>
      <Heading />
      <Introduction />
      {windowWidth > 903 ? <MainInfo /> : <MainInfoMobile />}
      <Footer />
    </MainPageContainer>
  );
};
