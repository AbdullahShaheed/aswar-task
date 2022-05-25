import http from "./httpService";

const endpoint = "/users";

export function register(user) {
  return http.post(endpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role,
  });
}
