function calculateTravel() {
    var light_speed =  1079252848.8;
    var distance = document.getElementById('valor').value;
    var travel_time = distance/light_speed;

    var output = document.getElementById('travelTime');
    output.innerHTML = ('A duraçao da viagem será de  ' + (travel_time).toFixed(2) + ' horas');
    output.innerHTML += ('<br />');
    output.innerHTML += ('ou de ' + (travel_time/24).toFixed(2) + ' dias,');
    output.innerHTML += ('<br />');
    output.innerHTML += ('ou de ' + (travel_time/8760).toFixed(2) + ' anos' );


}