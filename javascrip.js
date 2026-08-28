function calcular(){

    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    console.log(numero1.value)
    var suma = numero(numero1) + numero(numero2)
        document.getElementById("resuntado").innerText ="el resultado es.."+suma;
    
}