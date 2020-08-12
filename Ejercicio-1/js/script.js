let elemento = document.querySelectorAll('.color p');

function aleatorio() {
    let x = Math.floor(Math.random() * (256 - 0) + 0);
    let y = Math.floor(Math.random() * (256 - 0) + 0);
    let z = Math.floor(Math.random() * (256 - 0) + 0);

    return `rgb(${x},${y},${z})`;
}

function negro(event){
    let b = event.currentTarget;
    b.style.color = 'black';
}

function style(event) {
    const elemento = event.currentTarget;
    elemento.style.color = aleatorio();
}

for(let i = 0; i < elemento.length; i++){
    elemento[i].addEventListener('mouseenter', style);

    elemento[i].addEventListener('mouseleave', negro);
}