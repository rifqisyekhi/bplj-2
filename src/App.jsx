import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LayananAdvisTeknis from "./pages/LayananAdvisTeknis";
import LayananPengujian from "./pages/LayananPengujian";
import DetailLayananPengujian from "./pages/DetailLayananPengujian";
import Duratek from "./pages/Duratek";
import Lobby from "./pages/Lobby";
import Nspk from "./pages/Nspk";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/nspk" element={<Nspk />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/layanan-advis-teknis" element={<LayananAdvisTeknis />} />
        <Route path="/layanan-pengujian" element={<LayananPengujian />} />
        <Route
          path="/layanan-pengujian/:slug"
          element={<DetailLayananPengujian />}
        />
        <Route path="/duratek" element={<Duratek />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
