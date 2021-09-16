import NavBar from "./components/NavBar";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProductState from "./context/product/ProductState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ProductState>
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
          <Route exact path="/card">
            <Card />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ProductState>
  );
}

export default App;
