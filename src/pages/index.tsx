import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Introduction } from "../components/Introduction";
import { MainInfo } from "../components/MainInfo";
import { MainInfoMobile } from "../components/MainInfoMobile";
import { Navbar } from "../components/Navbar";
import { Separator } from "../components/Separator";
import { MainPageContainer } from "./styles";

export const MainPage = () => {
  const width = useWindowWidth();

  return (
    <MainPageContainer>
      <Navbar />

      <Heading />
      <Separator />

      <Introduction />
      {width > 903 && (<Separator />)}

      {width > 903 ? <MainInfo /> : <MainInfoMobile />}
      <Separator />

      <Footer />
    </MainPageContainer>
  );
};
