function calcular(){


    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");

    var multiplicacion = (numero1.value) * (numero2.value);
    console.log(multiplicacion)
var ressultado =document.getElementById("ressultado");
resultado.innerText = "El resultado es: " + multiplicacion;
    
}