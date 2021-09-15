function Converter(){
    var elementValue = document.getElementById('valor');
    value = elementValue.value;
    converted_value = parseFloat(value) * 5.24
    console.log(converted_value)
    var output = document.getElementById('valorConvertido') 
    output.innerHTML = 'R$: ' + (converted_value)
}

function ConverterEuro(){
    var elementValue = document.getElementById('valor');
    value = elementValue.value;
    converted_value = parseFloat(value) * 0.85 
    console.log(converted_value)
    var output = document.getElementById('valorConvertido') 
    output.innerHTML = '€: ' + (converted_value)
}


