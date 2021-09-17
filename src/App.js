import NavBar from "./components/NavBar";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import ProductState from "./context/product/ProductState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import UserState from "./context/user/UserState";
import About from "./components/pages/About";

function App() {
  return (
    <UserState>
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
              <Cart />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ProductState>
    </UserState>
  );
}

export default App;
