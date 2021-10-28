import { API_BASE_URL } from "./siteUrls";

export const SITE_URLS = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  ABOUT: "/about",
  HOME: "/home",
};

export const API_URLS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}auth/login`,
    ME: `${API_BASE_URL}auth`,
    LOGOUT: `${API_BASE_URL}logout`,
  },
};

/* //in case of RBAC
export const MODULES = {
    USERS: 'users'
}

export const OPERATIONS = {
    LIST: 'list'
} */
