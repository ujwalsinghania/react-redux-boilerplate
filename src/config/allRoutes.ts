import { SITE_URLS } from ".";
import About from "../containers/about";
import Dashboard from "../containers/dashboard";
import Home from "../containers/home";
import Login from "../containers/login";

export const ALL_ROUTES = [
  {
    path: SITE_URLS.HOME,
    component: Home,
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: SITE_URLS.LOGIN,
    component: Login,
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: SITE_URLS.ABOUT,
    component: About,
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: SITE_URLS.DASHBOARD,
    component: Dashboard,
    isPrivate: true,
    isRestricted: false,
    //module: MODULES.USERS,
    //operation: [OPERATIONS.LIST]
  },
];
