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
