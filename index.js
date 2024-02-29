const diminuir = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const aumentar = document.getElementById("increaseBtn");
const contador = document.getElementById("Count");

let count = 0;

diminuir.onclick = function(){
    count--;
    contador.textContent = count;
}

reset.onclick = function(){
    count = 0;
    contador.textContent = count;
}

aumentar.onclick = function(){
    count++;
    contador.textContent = count;
}

