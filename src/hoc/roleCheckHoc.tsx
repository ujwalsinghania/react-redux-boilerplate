import React from "react";
import { useHasPermissions } from "../hooks/selectors/userSelector";
import { Module, Operations } from "../interfaces/common";

interface RoleHocProps {
  module: Module;
  operations: Operations[];
  children: JSX.Element;
}

const RoleCheckHOC = ({ module, operations, children }: RoleHocProps) => {
  const hasPermissions = useHasPermissions();

  return <>{hasPermissions(module, operations) ? children : null}</>;
};

export default RoleCheckHOC;
