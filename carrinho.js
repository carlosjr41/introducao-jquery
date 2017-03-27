var atualizaDados = function () {
    var carrinhos = $(".carrinho");

    carrinhos.each(function () {
        var carrinho = $(this);
        var valores = carrinho.find(".total:visible");
        var total = 0.0;
        for (var i = 0; i < valores.length; i++) {
            total += parseFloat($(valores[i]).text())
        }

        carrinho.find(".valor-total").text(total);
        carrinho.find(".quantidade-de-itens").text(valores.length);
    });


};

var evtRemove = function (event) {
    event.preventDefault();

    var self = $(this);

    self.closest("tr").hide();

    atualizaDados();
};

var evtUndo = function (event) {

    var carrinho = $(this).closest(".carrinho");
    carrinho.find("tr:visible").removeClass("recuperado");
    var trs = carrinho.find("tr:hidden");
    trs.addClass("recuperado").show();

    atualizaDados();
}

var aposInicializado = function () {
    atualizaDados();

    $(".remove-item").click(evtRemove);
    $(".undo").click(evtUndo);
};


$(aposInicializado);