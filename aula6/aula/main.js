function getPoints(player){
    var points = player.vitorias*3 + player.empates;
    return points
}

function updateListPoints(player_list){
    for (let i = 0; i < player_list.length; i++){
        player_list[i].pontos = getPoints(player_list[i]);
    }
}

function validCheck(){
    var wins_number = 0;
    var loss_number = 0;
    var draw_number = 0;
    for (let i = 0; i < player_list.length; i++){
        var player = player_list[i];
        wins_number += player.vitorias;
        loss_number += player.derrotas;
        draw_number += player.empates;
    }

    var element =  document.getElementById('error-display');
    console.log('win:'+wins_number);
    console.log('loss:'+loss_number);
    console.log('draw:'+draw_number);
    if(wins_number != loss_number || (draw_number % 2) == 1){
        
        element.innerHTML = 'Tabela Inválida, por favor atualize os dados!'
    }
    else{
        element.innerHTML = ''
    }
        

}

function displayPlayers(player_list){
    var element = '';
    for (let i = 0; i < player_list.length; i++){

        var player = player_list[i];

        
        element += '<tr>';
        element += '<td>' + player.nome + '</td>';
        element += '<td>' + player.vitorias + '</td>';
        element += '<td>' + player.empates + '</td>';
        element += '<td>' + player.derrotas + '</td>';
        element += '<td>' + player.pontos+ '</td>';
        element += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        element += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
        element += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>";
        element += '</tr>'
        var tabela = document.getElementById('tabelaJogadores');
        tabela.innerHTML = element;
    }
}

function adicionarVitoria(player_list_postion){
    var player = player_list[player_list_postion];
    player.vitorias += 1;
    player.pontos = getPoints(player);
    displayPlayers(player_list);
    validCheck()
}

function adicionarEmpate(player_list_postion){
    var player = player_list[player_list_postion];
    player.empates += 1;
    player.pontos = getPoints(player);
    displayPlayers(player_list)
    validCheck()
    
}

function adicionarDerrota(player_list_postion){

    var player = player_list[player_list_postion];
    player.derrotas += 1
    player.pontos = getPoints(player)
    displayPlayers(player_list)
    validCheck()
}



player_list = [];

var rafa = {
    nome:"Rafa", 
    vitorias:3,
    empates: 1,
    derrotas:3,
    pontos:0
};
player_list.push(rafa);

var paulo = {
    nome:"Paulo",
    vitorias:2,
    empates:2,
    derrotas:3,
    pontos:0 
};
player_list.push(paulo);


var guilherme = {
    nome:"Guilherme",
    vitorias:3,
    empates:1,
    derrotas:2,
    pontos:0 
};
player_list.push(guilherme);

console.log(player_list)

updateListPoints(player_list);
displayPlayers(player_list)
