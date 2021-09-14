function Converter(){
    var elementValue = document.getElementById('valor');
    value = elementValue.value;
    converted_value = parseFloat(value) * 5.24
    console.log(converted_value)
}

