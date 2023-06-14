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

var desktopIcons = document.querySelectorAll(".desktop-icon");

desktopIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
        } else {
            this.classList.add("selected");
        }
    });
});

