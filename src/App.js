import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Homepage from "./components/pages/Homepage/Homepage.js";
import Footer from "./components/pages/Footer/Footer.js";
import Blogs from "./components/pages/Blogs/blog";
import Projects from "./components/pages/Projects/projects";
import Contacts from "./components/pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Homepage} />
      <Route path="/Projects" exact component={Projects} />
      <Route path="/Blogs" exact component={Blogs} />
      <Route path="/Talks" exact component={Talks} />
      <Route path="/Contact" exact component={Contacts} />
      <Footer />
    </Router>
  );
}

export default App;
