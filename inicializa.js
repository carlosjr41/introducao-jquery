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

    $(".alterna-propaganda").click(evtAlternaPropaganda);

};


$(aposInicializado);