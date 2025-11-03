import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import MainLayout from "./components/MainLayout";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<ContactUs />} />
          </Route>
          <Route exat path="/login" element={<LoginForm />} />
        </Routes>
      </>
    );
  }
}

export default App;
