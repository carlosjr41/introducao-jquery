var umaPropaganda = function(){
    var propagandas= ["Deseja comprar uma moto?", "Deseja comprar um carro?", "Deseja comprar uma casa?","Deseja comprar um celular?"];
    var posicao = Math.floor(propagandas.length * Math.random());
    var tr = $("<tr>").addClass("propaganda");
    tr.append($("<td>"));
    tr.find("td").attr("colspan",6).text(propagandas[posicao]);

    return tr;
}