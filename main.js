let tarjetaDestapada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let sugundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

let namber = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,];
namber = namber.sort(()=>{return Math.random()-0.5});
console.log(namber);

function contartiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundo`
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
        }
    },1000);
}

function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = namber[i];
        tarjetaBloqueada.disabled = true;
    }
}


function destapar(id){

    if(temporizador == false){
        contartiempo();
        temporizador = true;
    }

    tarjetaDestapada++;
    console.log(tarjetaDestapada);

    if(tarjetaDestapada == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = namber[id];
        tarjeta1.innerHTML = namber[id];

        tarjeta1.disabled = true;

    }else if(tarjetaDestapada == 2){
        tarjeta2 = document.getElementById(id);
        sugundoResultado = namber[id];
        tarjeta2.innerHTML = namber[id];

        tarjeta2.disabled = true;

        movimientos++;
        mostrarMovimientos.innerHTML = `movimientos ${movimientos}`;

        if(primerResultado == sugundoResultado){
            tarjetaDestapada = 0;

            aciertos++;
            mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;
            
            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `aciertos: ${aciertos}😱`;
                mostrarTiempo.innerHTML = `fantastico 🤝 solo demoraste ${timerInicial = timer} segundos`
                mostrarMovimientos.innerHTML =  `movimientos ${movimientos}🤟😎`;
            }

        }else{
            setTimeout(() =>{
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaDestapada = 0;
            },400);
        }
    }
}