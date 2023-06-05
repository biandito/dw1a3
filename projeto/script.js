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

$(".desktop-icon").draggable({
  containment: ".area-de-trabalho",
  stop: function () {
    $(this).removeClass("selected");
    $(this).addClass("selected");
  }
});

$(".desktop-icon").click(function(){
    if($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    } else {
        $(this).addClass("selected");
    }
});