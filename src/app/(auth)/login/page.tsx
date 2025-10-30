
import React from "react";
import AuthLayoutDesign from "../_components/authLayout";
import LoginForm from "./components/loginForm";


const LoginPage = () => {
  return (
    <div>
      <AuthLayoutDesign>
        <LoginForm/>
      </AuthLayoutDesign>
    </div>
  );
};

export default LoginPage;