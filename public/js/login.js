const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in.");
    }
  }
};
// const signupHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector("#username-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (username && email && password) {
//     const response = await fetch("/api/user/signup", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up.");
//     }
//   }
// };

// document.querySelector("#login-form").addEventListener("submit", loginHandler);
// document
//   .querySelector("#signup-form")
//   .addEventListener("submit", signupHandler);

document.querySelector(".login-form").addEventListener("submit", loginHandler);
