import React, { useState } from "react";
import {
  AppContainer,
  LoginSection,
  FormContainer,
  LogoContainer,
  LogoImage,
  WebsiteName,
  Form,
  FormHeading,
  Input,
  ForgotPasswordLink,
  LoginButton,
  SignUpContainer,
  SignUpText,
  SignUpLink,
} from "./styledComponents";

import LOGO_URL from "../../assets/logo_cn.png";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempt with:", { username, password });
  };

  return (
    <AppContainer>
      <LoginSection>
        <LogoContainer>
          <LogoImage src={LOGO_URL} alt="Code Nexus Logo" />
          <WebsiteName>CODE NEXUS</WebsiteName>
        </LogoContainer>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormHeading>Login to Code Nexus</FormHeading>
            <Input
              type="text"
              placeholder="Email / Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
            <LoginButton type="submit">Log In</LoginButton>
          </Form>
          <SignUpContainer>
            <SignUpText>Don't have an account?</SignUpText>
            <SignUpLink href="#">Sign Up</SignUpLink>
          </SignUpContainer>
        </FormContainer>
      </LoginSection>
    </AppContainer>
  );
};

export default LoginForm;
