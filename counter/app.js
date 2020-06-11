const counter = document.getElementsByClassName("counter")[0];
const increment = document.getElementsByClassName("increment")[0];
const reset = document.getElementsByClassName("reset")[0];
const decrement = document.getElementsByClassName("decrement")[0];

// variables
var n_counter = 0;

refreshCounter();

function refreshCounter() {
    if (n_counter > 0) {
        counter.style.color = "#20bf6b";
    }
    else if (n_counter < 0) {
        counter.style.color = "#eb3b5a";
    } else {
        counter.style.color = "#4b6584";
    }
    counter.innerHTML = n_counter;
}

increment.addEventListener("click", increment_var);
decrement.addEventListener("click", decrement_var);
reset.addEventListener("click", reset_var);

function increment_var() {
    n_counter++;
    console.log(`n_counter value: ${n_counter}`);
    refreshCounter();
}

function decrement_var() {
    n_counter--;
    console.log(`n_counter value: ${n_counter}`);
    refreshCounter();
}

function reset_var() {
    n_counter = 0;
    console.log("n_counter value has ben restarted.");
    refreshCounter();
}