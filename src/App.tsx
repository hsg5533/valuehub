import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/tailwindcss.css";
import Main from "./pages/Main";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
