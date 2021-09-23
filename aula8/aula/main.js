function request_Json(pokemon_number){
    url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon_number.toString()
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);
    
}

function get_card_attributes(json){
    hp = json.stats[0].base_stat
    attack = json.stats[1].base_stat
    defense = json.stats[2].base_stat
    special_attack = json.stats[3].base_stat
    special_defense = json.stats[4].base_stat
    speed = json.stats[5].base_stat


    if (attack >= special_attack){
        final_attack = attack;
    }
    else{
        final_attack = special_attack;
    }


    if (defense >= special_defense){
        final_defense = defense;
    }
    else{
        final_defense = special_defense;
    }


    stats = [hp, final_attack, final_defense, speed];
    return stats;
}

function get_pokemon_name(json){
    return json.name
}

function get_sprite_url(json){
    console.log(json['sprites']['other']['official-artwork']['front_default'])
    return json['sprites']['other']['official-artwork']['front_default']
}

function check_card_already_exist(name){
    for (let i = 0; i < cards.lenght ; i++){
        if (name == cards[i].name){
            return True
        }
    }
}

function create_card(card_name, attributes_list, sprite_url){
    var card  = {name: card_name,
        attributes: {
            health:  attributes_list[0],
            attack:  attributes_list[1],
            defense:  attributes_list[2],
            speed:  attributes_list[3],
            url: sprite_url
        }
    }
    cards.push(card);
    return card;
}

function choose_random_card_number(){
    min_number = Math.ceil(1);
    max_number = Math.floor(pokemon_number);
    return parseInt(Math.floor(Math.random() * (max_number - min_number)) + min_number);
}

function create_random_card(){
    var json = request_Json(choose_random_card_number());
    var pokemon_name = get_pokemon_name(json);
    if (check_card_already_exist(pokemon_name)){
        json = request_Json(choose_random_card_number());
    }

    console.log(pokemon_name);
    var stats = get_card_attributes(json);
    var sprite_url = get_sprite_url(json)
    var card = create_card(pokemon_name, stats, sprite_url);
    return card;
}


function randomCard(){
    enemy_card = create_random_card();
    player_card = create_random_card();

    while (player_card.name == enemy_card.name){
        enemy_card = create_random_card();
    }
    document.getElementById('btnSortear').disabled = true;
    choose_stats();
    document.getElementById('resultado').innerHTML = '';
    
}

function choose_stats(){
    var options = document.getElementById("opcoes");
    var text = ""
    for (var attribute in player_card.attributes){
        text += `<button type="button" name="atribute" class="choose-attribute" onClick="battle('` + attribute + `')"> ` + capitalize_first_letter(attribute) + `</button>`

    }
    options.innerHTML = text;
}

function battle(attribute){
    var result = document.getElementById('resultado');
    var player_value = player_card.attributes[attribute];
    var enemy_value = enemy_card.attributes[attribute];
    var options = document.getElementById("opcoes");

    if (player_value > enemy_value){
        result.innerHTML = 'Voce Ganhou!';
        //options.innerHTML = '';
    }
    else if(player_value < enemy_value){
            result.innerHTML = 'Voce perdeu!';
            //options.innerHTML = '';
    }
    else if( player_value == enemy_value){
        result.innerHTML = 'Empate!';
        //options.innerHTML = '';
    }
    document.getElementById("opcoes").innerHTML = '';
    document.getElementById('btnSortear').disabled = false;

    return false;
}

function capitalize_first_letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

var cards = [];
pokemon_number = 151;
var enemy_card;
var player_card;
