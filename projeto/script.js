setTimeout(()=>{
    var hora= new Date().toLocaleDateString("pt-BR",{
        hour: "2-digit", minute: "2-digit"
    });

    $("#relogio").html(hora)

}, 100);

setInterval(()=>{
    var hora= new Date().toLocaleDateString("pt-BR",{
        hour: "2-digit", minute: "2-digit"
    });

    $("#relogio").html(hora)

}, 60000);