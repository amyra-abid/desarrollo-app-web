// creacion de Array

let arrays =["Xbox","Nintendo" ];

//creacion de funciones
function usarPush(){
//agregar al final
let entrada =prompt("agregar una consola")
arrays.push(entrada)
alert("el nuevo arreglo es:" + entrada.join("  "));
}

function usarPop(){
    // elimina el ultimo elemento
    let basurero = arrays.pop();
    alert(`Elemento eliminado:${basurero}`);
}

function usarUnshift(){

}