document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let numInput = document.getElementById("num-input");
  let numValue = numInput.value;
  let pinInput = document.getElementById("pin-input");
  let pinValue = pinInput.value;
  if (numValue === "01326153447" && pinValue === "1234") {
    window.location.href = "./home-page.html";
  } else {
    alert("Wrong phone number or pin number");
  }
  numInput.value = "";
  pinInput.value = "";
});
