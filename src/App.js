import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/Portfolio" component={Home} />
          <Route exact path="/Portfolio/about" component={About} />
          <Route exact path="/Portfolio/skills" component={Skills} />
          <Route exact path="/Portfolio/works" component={Works} />
          <Route exact path="/Portfolio/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
