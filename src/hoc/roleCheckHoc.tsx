import React from "react";
import { usePermissionsSelector } from "../hooks/selectors/userSelector";

interface RoleHocProps {
  module: string;
  operation: string[];
  children: JSX.Element;
}

const RoleCheckHOC = ({ module, operation, children }: RoleHocProps) => {
  const userPermissions = usePermissionsSelector();

  const checkRole = () => {
    let hasPermissions = userPermissions.some(
      (item: any) =>
        item.module === module && operation.includes(item.operation)
    );
    if (!operation && !module) {
      return true;
    } else if (hasPermissions) {
      return true;
    } else {
      return false;
    }
  };

  return <React.Fragment>{checkRole() ? children : null}</React.Fragment>;
};

export default RoleCheckHOC;
