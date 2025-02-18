import { signIn } from "./auth.js";

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { user, error } = await signIn(email, password);

  if (error) {
    alert(error);
    return;
  }
  localStorage.setItem("accessToken", user.accessToken);
  localStorage.setItem("refreshToken", user.refreshToken);
  // Redirect to home page after successful login
  window.location.href = "index.html";
});
