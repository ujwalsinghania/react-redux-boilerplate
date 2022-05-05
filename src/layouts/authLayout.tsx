import React from "react";
import Header from "./common/header";

interface AuthLayoutProps {
  children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
