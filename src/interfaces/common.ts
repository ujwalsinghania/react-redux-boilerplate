export enum RequestTypes{
    POST= 'POST',
    GET= 'GET',
    PUT='PUT',
    DELETE= 'DELETE'
}

export enum Module{
    
}

export enum Operation{
    Create='create',
    Read='read',
    Update='update',
    Delete='delete'
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