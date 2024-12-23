import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/colors.css'
import './assets/css/font.css'
import Navigation from "./components/Navigation";
import Products from './pages/Product'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Applications from "./pages/Applications";
import Careers from "./pages/Careers";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Login from "./pages/Login";
import MissionVision from "./pages/MissionVision";
import Partnership from "./pages/Partnership";
import Profile from "./pages/Profile";
import Publication from "./pages/Publication";
import SoftwareTools from "./pages/SoftwareTools";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <BrowserRouter >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mission_vision" element={<MissionVision />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/software_tools" element={<SoftwareTools />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
