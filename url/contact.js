// todo: I first tried using the master script but I couldn't get that script to access the DOM of contacts (instead of index.html). //
// syntax for choosing the contact method on the contact page //
document.getElementById('oldMethod').onclick = showOldMethod;
document.getElementById('recentMethod').onclick = showRecentMethod;
document.getElementById('todayMethod').onclick = showTodayMethod;

function showOldMethod() {
    document.getElementById('old').style.display = 'flex';
    document.getElementById('recent').style.display = 'none';
    document.getElementById('today').style.display = 'none';
}

function showRecentMethod() {
    document.getElementById('old').style.display = 'none';
    document.getElementById('recent').style.display = 'flex';
    document.getElementById('today').style.display = 'none';
}

function showTodayMethod() {
    document.getElementById('old').style.display = 'none';
    document.getElementById('recent').style.display = 'none';
    document.getElementById('today').style.display = 'flex';
}
