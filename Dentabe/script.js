function login() {
  let rol = document.getElementById("rol").value;
  localStorage.setItem("rol", rol);
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("rol");
  window.location.href = "index.html";
}

window.onload = function() {
  let rol = localStorage.getItem("rol");
  if(document.getElementById("mensaje") && rol){
    document.getElementById("mensaje").innerText =
      "Bienvenido, tu rol es: " + rol;
  }
}
