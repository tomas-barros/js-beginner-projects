// buttons
const previus = document.getElementsByClassName("previus")[0];
const next = document.getElementsByClassName("next")[0];

// elements
const name = document.getElementsByClassName("name")[0];
const txtCont = document.getElementsByClassName("text-content")[0];

// event listeners
previus.addEventListener("click", previusReview);
next.addEventListener("click", nextReview);

// vars
var currentReview = 0;

// reviews
var names = ['John Doe', 'Claudia Torres', 'Tomas Barros', 'Luis Jara'];
var reviews = [
    'Yes i do not i do yes i do not i do',
    'Soy una personita muy bonita',
    'Soy feo feo feo feo feo',
    'Me pegué en la cabeza'
];

// functions
function refreshReviews() {
    name.innerHTML = names[currentReview];
    txtCont.innerHTML = reviews[currentReview];

    console.log(`currentReview value ${currentReview}`);
}

function previusReview() {
    if (currentReview == 0) {
        currentReview = 3;
    } else {
        currentReview--;
    }

    refreshReviews()
}

function nextReview() {
    if (currentReview == 3) {
        currentReview = 0;
    } else {
        currentReview++;
    }

    refreshReviews()
}

refreshReviews();