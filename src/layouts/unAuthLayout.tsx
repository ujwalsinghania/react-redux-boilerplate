import React, { Suspense } from "react";

interface UnAuthLayoutProps {
  children: JSX.Element;
}

const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {
  return <>{children}</>;
};

export default UnAuthLayout;
