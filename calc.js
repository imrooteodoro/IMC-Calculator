
    function calcular(){
        var altura = document.getElementById("altura").value;
        var peso = document.getElementById("peso").value;
        var multi = parseFloat(altura) * parseFloat(altura);
        var resultado = (peso / multi).toFixed(2).replace(",", ".");
        document.getElementById("imc").value = resultado ;
    
    if (resultado < 19){
        document.getElementById("linha1").style.color = 'white';
        document.getElementById("linha1").style.backgroundColor ="red";
        document.getElementById("resultado1").innerHTML = "Abaixo do peso";
        document.getElementById("osso").innerHTML = "vai comer, mano";
        document.getElementById("animacao").innerHTML = "<img src=\'caveira_.gif'\style=width:100px;height:100px;margin: 10 40 100 0;\>"
       
    } 
    else if (resultado > 18.99 && resultado < 25){
    document.getElementById("linha2").style.color = 'white';
    document.getElementById("linha2").style.backgroundColor ="green";
    document.getElementById("resultado1").innerHTML = "Normal";  
    document.getElementById("animacao").innerHTML = "<img src=\'normal.png'\style=width:100px;height:100px;margin: 10 40 100 0;\>" + "Estás normal,cara...";

    }
    else if(resultado > 24.99 && resultado < 30){
    document.getElementById("linha3").style.color = 'white';
    document.getElementById("linha3").style.backgroundColor ="red";
    document.getElementById("resultado1").innerHTML = "Sobrepeso";  
    document.getElementById("animacao").innerHTML = "<img src=\'pernalonga.png'\style=width:100px;height:100px;margin: 10 40 100 0;\>" + "perna longa gordo";
    }

    else if(resultado > 29.99 && resultado < 40){
        document.getElementById("linha4").style.color = 'white';
        document.getElementById("linha4").style.backgroundColor ="red";
        document.getElementById("resultado1").innerHTML = "Obesidade I";  
        document.getElementById("animacao").innerHTML = "<img src=\'gordao.png'\style=width:70px;height:70px;margin: 10 40 100 0;\>" + "Bora emagrecer kkkk";
        }
        else if(resultado >= 39.99){
            document.getElementById("linha5").style.color = 'white';
            document.getElementById("linha5").style.backgroundColor="red";
            document.getElementById("resultado1").innerHTML = "Obesidade Mórbida";  
            document.getElementById("animacao").innerHTML = "<img src=\'baleia.png'\style=width:120px;height:100px;margin: 10 50 100 0;\>" + "Certeza que você não consegue andar";
            }


}


function ponto(){   
    var char = document.getElementById("altura").value.length;
    var char2 = document.getElementById("imc").value.length;
        if (char == 1){
        document.getElementById("altura").value = document.getElementById("altura").value + ".";
    
    }
   
  

}

function reset(){
    var main = document.getElementById("main").value;
    var reset = 0;

    if (2 > 1){
        ( main = reset );
    }
}
