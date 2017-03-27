var umaPropaganda = function(){
    var propagandas= ["Deseja comprar uma moto?", "Deseja comprar um carro?", "Deseja comprar uma casa?","Deseja comprar um celular?"];
    var posicao = Math.floor(propagandas.length * Math.random());
    var tr = $("<tr>").addClass("propaganda");
    tr.append($("<td>"));
    tr.find("td").attr("colspan",6).text(propagandas[posicao]);

    return tr;
}

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

var daDestaque = function(){
   $(this).addClass("hovering");
}

var tiraDestaque = function(){
    $(this).removeClass("hovering");
}

var aposInicializado = function () {
    atualizaDados();

    $(".remove-item").click(evtRemove);
    $(".undo").click(evtUndo);

    $(".carrinho").each(function(){
        $(this).find("tr:nth-child(3n), tr:last").each(function(){
            umaPropaganda().insertAfter($(this));
        })
    })

    $("tbody tr").hover(daDestaque,tiraDestaque);
};


$(aposInicializado);