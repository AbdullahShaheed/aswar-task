import jwtDecode from "jwt-decode";
import http from "./httpService";

const endpoint = "/logins";
http.setToken(getToken("token")); //to remvove bidirectional dependency between auth and http

export async function login(email, password) {
  const { data: token } = await http.post(endpoint, { email, password });
  localStorage.setItem("token", token);
}

export function loginWithToken(token) {
  localStorage.setItem("token", token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
}

export function isAdmin() {
  try {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    return user.role === "admin" ? true : false;
  } catch (ex) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem("token");
}

export default {
  login,
  loginWithToken,
  logout,
  getCurrentUser,
  getToken,
  isAdmin,
};
