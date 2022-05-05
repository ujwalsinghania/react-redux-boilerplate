export enum RequestTypes{
    POST= 'POST',
    GET= 'GET',
    PUT='PUT',
    DELETE= 'DELETE'
}

export interface OptionValue{
    label: string;
    value: string;
}

export interface RouteType {
    path: string;
    component: React.ReactNode;
    isPrivate: boolean;
    isRestricted: boolean;
    module?: string;
    operation?: string[];
  }