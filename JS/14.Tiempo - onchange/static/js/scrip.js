function hide(elemento){
    elemento.remove();
}


const grados = Number(document.getElementById("grados").textContent);
const grados1 = Number(document.getElementById("grados1").textContent);
const grados2 = Number(document.getElementById("grados2").textContent);
const grados3 = Number(document.getElementById("grados3").textContent);
const grados4 = Number(document.getElementById("grados4").textContent);
const grados5 = Number(document.getElementById("grados5").textContent);
const grados6 = Number(document.getElementById("grados6").textContent);
const grados7 = Number(document.getElementById("grados7").textContent);

const gradosf = ((grados *1.8)+32).toFixed(0);
const gradosf1 = ((grados1 *1.8)+32).toFixed(0);
const gradosf2 = ((grados2 *1.8)+32).toFixed(0);
const gradosf3 = ((grados3 *1.8)+32).toFixed(0);
const gradosf4 = ((grados4 *1.8)+32).toFixed(0);
const gradosf5 = ((grados5 *1.8)+32).toFixed(0);
const gradosf6 = ((grados6 *1.8)+32).toFixed(0);
const gradosf7 = ((grados7 *1.8)+32).toFixed(0);

function cambiar(medida){
    if (medida === "C"){
        document.getElementById("grados").textContent = grados
        document.getElementById("grados1").textContent = grados1
        document.getElementById("grados2").textContent = grados2
        document.getElementById("grados3").textContent = grados3
        document.getElementById("grados4").textContent = grados4
        document.getElementById("grados5").textContent = grados5
        document.getElementById("grados6").textContent = grados6
        document.getElementById("grados7").textContent = grados7
    }else if (medida === "F"){
        document.getElementById("grados").textContent = gradosf
        document.getElementById("grados1").textContent = gradosf1
        document.getElementById("grados2").textContent = gradosf2
        document.getElementById("grados3").textContent = gradosf3
        document.getElementById("grados4").textContent = gradosf4
        document.getElementById("grados5").textContent = gradosf5
        document.getElementById("grados6").textContent = gradosf6
        document.getElementById("grados7").textContent = gradosf7
    }
}

function alerta(){
    alert("This page says \n loading weather report...")
}
console.log("funciona!")