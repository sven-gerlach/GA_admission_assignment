// todo: I first tried using the master script but I couldn't get that script to access the DOM of contacts (instead of index.html). //
// syntax for choosing the contact method on the contact page //

const styledButtons = document.querySelectorAll(".styled");
styledButtons.forEach(button => {
    button.addEventListener("click", event => {
        const clickedButton = event.currentTarget;
        if (clickedButton.id === "oldMethod") {showOldMethod()}
        else if (clickedButton.id === "recentMethod") {showRecentMethod()}
        else {showTodayMethod()};
    })
})

const old = document.getElementById("old");
const recent = document.getElementById("recent");
const today = document.getElementById("today");

function showOldMethod() {
    old.style.display = 'flex';
    recent.style.display = 'none';
    today.style.display = 'none';
}

function showRecentMethod() {
    old.style.display = 'none';
    recent.style.display = 'flex';
    today.style.display = 'none';
}

function showTodayMethod() {
    old.style.display = 'none';
    recent.style.display = 'none';
    today.style.display = 'flex';
}
