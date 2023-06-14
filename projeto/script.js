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
 
