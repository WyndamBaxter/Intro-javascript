function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar </b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/"
}

function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1 + n2;
}*/

/*var validar = 0;
function validaIdade(idade){
    validar;
    if(idade>=18){
        validar =true;

    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));


/*
var d = new Date();
alert(d.getMonth()+1);
*/



/*var count;
for(count = 0; count<=5; count++ ){
    alert(count);
}*/


/*var count = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
};*/



/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
} else{
    alert("Menor de idade");
}*/

//var frutas = [{nome:"maçâ", cor:"vermelha"},{nome:"banana", cor:"amarela"}];
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome:"maçâ", cor:"vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maçâ", "pêra", "laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));



//var nome = "Wyndam Baxter Cardoso";
//var n1 = 29;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade +" anos");
//alert(idade+idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLocaleUpperCase());
//alert(frase.replace("Japão", "Brasil"));

