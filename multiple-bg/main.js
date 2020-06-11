const cont = document.getElementsByClassName("container")[0];
const hxValue = document.getElementsByClassName("hxValue")[0];
const hexValues = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeBG() {
    let hx = '#';

    for (let i = 0; i<6; i++) {
        const idx = Math.floor(Math.random()*hexValues.length);
        hx += hexValues[idx];
    }

    cont.style.backgroundColor = hx;
    hxValue.innerHTML = hx;

    console.log(`Current background: ${hx}`);
}