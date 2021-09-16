import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
