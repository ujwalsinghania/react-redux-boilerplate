import React from "react";

interface UnAuthLayoutProps {
  children: React.ReactNode;
}

const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {
  return <>{children}</>;
};

export default UnAuthLayout;
