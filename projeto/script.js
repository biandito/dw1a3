setTimeout(()=>{
    var hora= new Date().toLocaleDateString("pt-BR",{
        hour: "2-digit", minute: "2-digit"
    });

    $("#relogio").html(hora)

}, 100);

setInterval(() => {
    var hora = new Date().toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    document.getElementById("relogio").innerHTML = hora;
}, 60000);

document.getElementById("iniciar").addEventListener("click", function() {
    document.getElementById("iniciar").classList.toggle("active");
    var menuIniciar = document.getElementById("menuIniciar");
    menuIniciar.classList.toggle("active");
  
    if (menuIniciar.style.display === "none") {
      menuIniciar.style.display = "block";
    } else{
      menuIniciar.style.display = "none";
    }
  }
);

document.getElementById("ie").addEventListener("click", function() {
  document.getElementById("ie").classList.toggle("active");
  var error = document.querySelector(".error");
  error.classList.toggle("active");

  if (error.style.display === "none") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

document.getElementById("ie-iniciar").addEventListener("click", function() {
  document.getElementById("ie-iniciar").classList.toggle("active");
  var error = document.querySelector(".error");
  error.classList.toggle("active");

  if (error.style.display === "none") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

var okButton = document.querySelector(".ok");

okButton.addEventListener("click", function() {
  var error = document.getElementById("error");
  error.style.display = "none";
  
});

 
