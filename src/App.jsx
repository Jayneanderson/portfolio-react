import { Fragment } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" exact element={<Teste to="/404" />} />
        <Route
          path="/"
          element={[
            <Banner />,
            <About />,
            <Skills />,
            <Projects />,
            <Contact />,
          ]}
        />
        <Route path="/projects/:id" exact element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Teste = () => {
  return <h1>Teste</h1>;
};

export default App;
