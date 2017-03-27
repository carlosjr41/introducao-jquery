var evtRemove = function (event) {
    event.preventDefault();

    var self = $(this);

    self.closest("tr").fadeOut();

    atualizaDados();
};

var evtUndo = function (event) {

    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    var trs = carrinho.find("tr:hidden").not(".propaganda");
    trs.addClass("recuperado").show();

    atualizaDados();
}

var daDestaque = function(){
   $(this).addClass("hovering");
   $(this).find(".remove-item").fadeIn();
}

var tiraDestaque = function(){
    $(this).removeClass("hovering");
    $(this).find(".remove-item").fadeOut();
}


var evtAlternaPropaganda = function(event){
    event.preventDefault();
    $(".propaganda").fadeToggle();
    $(".alterna-propaganda").toggle();
}

