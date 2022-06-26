import { MainPage } from "./pages/MainPage";
import { AppContainer } from "./styles";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HoobPage } from "./pages/Projects/Hoob";
import { MinimalPageMobile } from "./pages/Projects/Minimal/Mobile";
import { Navbar } from "./components/Navbar";

import { useWindowWidth } from "@react-hook/window-size";
import { useLocation } from "react-router-dom";

import { mainPageLinks, projectPageLinks } from "./constants/navbarLinks";

function App() {
  const windowWidth = useWindowWidth();
  const location = useLocation().pathname;

  return (
    <AppContainer>
      <Navbar links={location === "/" ? mainPageLinks : projectPageLinks} />

      <Routes>
        <Route path="/" element={<MainPage windowWidth={windowWidth} />} />
        <Route path="project">
          <Route path="minimal" element={<MinimalPageMobile />} />
          <Route path="hoob" element={<HoobPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
