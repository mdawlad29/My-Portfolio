import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Features from "./Pages/Features";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Pricing from "./Pages/Pricing";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/features" element={<Features/>}/> 
          <Route path="/portfolio" element={<Portfolio/>}/> 
          <Route path="/resume" element={<Resume/>}/> 
          <Route path="/pricing" element={<Pricing/>}/> 
          <Route path="/blogs" element={<Blogs/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="*" element={<Notfound/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
