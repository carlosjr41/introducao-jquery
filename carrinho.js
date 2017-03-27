var atualizaDados = function () {
    var valores = $(".total:visible");
    var total = 0.0;
    for (var i = 0; i < valores.length; i++) {
        total += parseFloat($(valores[i]).text())
    }
    $("#valor-total").text(total);
    $("#quantidade-de-itens").text(valores.length);
};

var evtRemove = function (event) {
    event.preventDefault();

    var self = $(this);

    self.closest("tr").hide();

    atualizaDados();
};

var evtUndo = function (event){
    $("tr:visible").removeClass("recuperado");
    var trs = $("tr:hidden");
    trs.show();
    trs.addClass("recuperado");

    atualizaDados();
}

var aposInicializado = function() {
    atualizaDados();

    $(".remove-item").click(evtRemove);
    $("#undo").click(evtUndo);
};


$(aposInicializado);