const iconimo = new Iconimo.default({
    duration: 200,
    strokeRatio: 15,
});

function random(from, to) {
    return Math.round(Math.random() * to) + from;
}

let demoIconimos = document.querySelectorAll('.icon-list i');
let presentationIconimo = document.getElementById('presentation-iconimo');
let presentationIconimoClass = document.getElementById('presentation-iconimo-class');

if(demoIconimos) {
    for(let i = 0, l = demoIconimos.length; i < l; i++) {
        demoIconimos[i].addEventListener('click', (evt) => {
            let css = demoIconimos[i].dataset.icon;
            presentationIconimo.className = css;
            presentationIconimoClass.innerText = css;
        });
    }
}
