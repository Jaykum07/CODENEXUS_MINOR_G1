import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exat path="/login" element={<LoginForm />} />
        </Routes>
      </>
    );
  }
}

export default App;
