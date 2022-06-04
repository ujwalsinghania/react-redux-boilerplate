export enum RequestTypes {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum Module {
  USERS = "users",
}

export enum Operations {
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
  LIST = "list",
}

export interface OptionValue {
  label: string;
  value: string;
}

export interface RouteType {
  path: string;
  component: any;
  isPrivate: boolean;
  isRestricted: boolean;
  module?: Module;
  operation?: Operations[];
}