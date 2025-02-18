import { initAuthStateObserver } from "./auth.js";
// import { logOut } from "./auth.js";

// const handleLogOut = async () => {
//   const result = await logOut();
//   if (result.error) {
//     console.error("Error logging out:", result.error);
//   } else {
//     console.log("Successfully logged out");
//   }
// };

// // Call the function when needed
// handleLogOut();
// Define a callback function to handle auth state changes
const handleAuthStateChange = (user) => {
  if (user) {
    console.log("User is signed in:", user);
    // localStorage.setItem("user", JSON.stringify(user));
  } else {
    console.log("No user is signed in");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("login-out");
  initAuthStateObserver(handleAuthStateChange);

  if (localStorage.getItem("accessToken")) {
    element.innerHTML = "Logout";
    element.addEventListener("click", () => {
      // localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      location.reload();
    });
  } else {
    element.innerHTML = "Login";
    element.addEventListener("click", () => {
      location.href = "/login.html";
    });
  }
  // element.innerHTML = localStorage.getItem("user")
  //   ? "Logout"
  //   : "Login";
});

// Initialize the auth state observer
