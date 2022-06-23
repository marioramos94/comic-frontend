import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComicPage from "./pages/ComicPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComicPage />} />
        <Route path="/:page" element={<ComicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
