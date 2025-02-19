import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./pages/about";
import Trainers from "./pages/trainers"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/contact"

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;