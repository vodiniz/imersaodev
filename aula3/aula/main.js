var secret_number = get_random_int(1, 10);
var tries = 3;
var output = document.getElementById('resultado');

function get_random_int(min_number, max_number){
    min_number = Math.ceil(min_number);
    max_number = Math.floor(max_number);
    return parseInt(Math.floor(Math.random() * (max_number - min_number)) + min_number);
}

function Reset() {
    secret_number = get_random_int(1, 10);
        tries = 3
}


function GuessNumber() {

    number = parseInt(document.getElementById('valor').value);
    if (tries > 0) {
        tries -= 1;
        console.log(secret_number);
        if (secret_number == number){
            output.innerHTML = ('Acertou, novo número criado.');
            Reset();
        }

        else if (secret_number > number){
            output.innerHTML = ('Numero escolhido menor que número secreto. Tentativas restantes :'+ tries);
            
        }

        else if (secret_number < number){    

            output.innerHTML = ('Numero escolhido maior que número secreto. Tentativas restantes :'+ tries);
        }
        

    }
    else{

        output.innerHTML = ('Suas tentativas acabaram, por favor reinicie o jogo.');
    }
}
                                                   