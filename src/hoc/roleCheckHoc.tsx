import React from "react";
import { useHasPermissions } from "../hooks/selectors/userSelector";
import { Module, Operation } from "../interfaces/common";

interface RoleHocProps {
  module: Module;
  operation: Operation[];
  children: JSX.Element;
}

const RoleCheckHOC = ({ module, operation, children }: RoleHocProps) => {
  const hasPermissions = useHasPermissions();

  return (
    <>
      {hasPermissions(module, operation) ? children : null}
    </>
  );
};

export default RoleCheckHOC;
