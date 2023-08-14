var nome_carro = "Novo Uno";
var n_porta = 4;
var cor_carro = azul;
var ano_carro = 2022;
var sistema_eletrico = true;
var velociade = 0;
var ligado = false;
var parado = false;

const marca = "Fiat";

function acelerar(){
    if(velociade < 120){
        velociade += 1;
    }
}
function frear(){
   if(velociade > 0){
        velociade -+ 1;
   }
}
function parar(){
   if(velociade == 0){
    parado = true;
   }else{
    parado = false;
   }
}
function ligar(){
    if(ligado == false){
        ligado = true;
    }
}
function desligar (){
   if(ligado == true){
        ligado = false;
   }
}