function create_card(card_name,card_health, card_attack, card_defense, card_speed){
    var card  = {name: card_name,
        attributes: {
            health: card_health,
            attack: card_attack,
            defense: card_defense,
            speed: card_speed
        }
    }
    return card
}



var cards = []


var card1 = create_card("bulbasaur", 7, 8, 10, 15);
console.log(card1.attributes.health)