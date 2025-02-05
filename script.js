function handleInput() {
  y = document.getElementById("user").value
  z = document.getElementById("pass").value
  if (y == "hello"){
    if (z == "world"){
      window.location.href = "logged-in.html";
    } else {
      document.getElementById("result").innerHTML = "Incorrect";
    }
  } else {
    document.getElementById("result").innerHTML = "Incorrect";
  }
}
