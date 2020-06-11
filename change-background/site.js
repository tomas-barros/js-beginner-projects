var lightMode = true;

function switchBg() {
    const cont = document.getElementsByClassName("container")[0];
    const btn = document.getElementsByClassName("btn")[0];

    if (lightMode) {
        cont.style.backgroundColor = "#2c3e50";
        cont.style.color = "#ecf0f1";
        btn.style.backgroundColor = "#ecf0f1";
        btn.style.color = "#2c3e50";

        lightMode = false;

    } else {
        cont.style.backgroundColor = "#ecf0f1";
        cont.style.color = "#2c3e50";
        btn.style.backgroundColor = "#2c3e50";
        btn.style.color = "#ecf0f1";

        lightMode = true;
    }

    console.log(`lightMode: ${lightMode}`);
}