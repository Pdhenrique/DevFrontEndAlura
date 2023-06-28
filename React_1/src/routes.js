import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Home";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";
import Favorites from "pages/Favorites";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
