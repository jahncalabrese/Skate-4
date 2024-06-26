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

var ele = document.getElementById("login-form");
if(ele){
  if(ele.addEventListener){
    ele.addEventListener("submit", loginHandler, false);  //Modern browsers
}else if(ele.attachEvent){
    ele.attachEvent('onsubmit', loginHandler);            //Old IE
}
}

// document.getElementById("login-form").addEventListener("submit", loginHandler);
