import { MainPage } from "./pages/MainPage";
import { AppContainer } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { MinimalPage } from "./pages/Projects/Minimal";
import { HoobPage } from "./pages/Projects/Hoob";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="project">
            <Route path="minimal" element={<MinimalPage />} />
            <Route path="hoob" element={<HoobPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
