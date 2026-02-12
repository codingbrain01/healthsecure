import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import FullscreenFrame from "./components/Microsoft";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frame" element={<FullscreenFrame />} />
      </Routes>
      <Footer />
    </>
  );
}
