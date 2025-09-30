console.log("page loaed...");

function liked(element){
    const span = element.querySelector('span');
    let like = parseInt(span.innerText);
    like++
    span.innerText = like;
}

function login(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    } else{
        element.innerText = "Login";
    }
}

function hide(el){
    el.remover();
}