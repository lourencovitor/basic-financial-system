export function setAccessToken(token) {
  localStorage.setItem("user", token);
}

export function getAccessToken() {
  const token = localStorage.getItem("user");
  if (token) {
    return token;
  }
  return null;
}
