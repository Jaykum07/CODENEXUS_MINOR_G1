import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #0f0725;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px; // This prevents the form from getting too wide
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 48px 40px;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  // Reduces padding on smaller mobile screens
  @media screen and (max-width: 480px) {
    padding: 32px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const WebsiteName = styled.h1`
  color: rgb(188, 162, 101);
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

// The <form> element
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormHeading = styled.h2`
  color: #5d289d;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 32px 0;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &::placeholder {
    color: #6e6e6e;
  }

  &:focus {
    outline: none;
    border-color: #5d289d;
  }
`;

export const ForgotPasswordLink = styled.a`
  color: #5d289d;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: right;
  margin-top: -10px;
  margin-bottom: 24px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #e8a509;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const SignUpContainer = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const SignUpText = styled.p`
  color: #6e6e6e;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  display: inline;
`;

export const SignUpLink = styled.a`
  color: #5d289d;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
