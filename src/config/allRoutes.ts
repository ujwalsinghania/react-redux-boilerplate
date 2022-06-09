import { Module, Operations } from '../interfaces/common';
import { SITE_URLS } from "./siteUrls";
import {lazy} from 'react'
import { RouteType } from "../interfaces/common";
const Users = lazy(() => import("../containers/users"));
const Dashboard = lazy(() => import("../containers/dashboard"));
const Login = lazy(() => import("../containers/login"));

//use isRestricted = false in case component is accessible both with and without login. For eg: Landing Page

export const ALL_ROUTES: RouteType[] = [
  {
    path: SITE_URLS.LOGIN,
    component: Login,
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: SITE_URLS.DASHBOARD,
    component: Dashboard,
    isPrivate: true,
    isRestricted: true,
  },
  {
    path: SITE_URLS.USERS,
    component: Users,
    isPrivate: true,
    isRestricted: true,
    module: Module.USERS,
    operation: [Operations.LIST]
  },
  
];
