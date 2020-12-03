//todo: there must be smarter way than replicating the same function n-times for different IDs//

// toggle between showing and not showing the expanded article with id=disruptive //
document.getElementById('disruptive').onclick = expandDisruptiveArticle;

function expandDisruptiveArticle() {
    let element = document.getElementById('disruptive');
    element.classList.toggle('expanded-article');
}

// toggle between showing and not showing the expanded article with id=jefferies //
document.getElementById('jefferies').onclick = expandJefferiesArticle;

function expandJefferiesArticle() {
    let element = document.getElementById('jefferies');
    element.classList.toggle('expanded-article');
}

// toggle between showing and not showing the expanded article with id=merrill //
document.getElementById('traderisks').onclick = expandTraderisksArticle;

function expandTraderisksArticle() {
    let element = document.getElementById('traderisks');
    element.classList.toggle('expanded-article');
}

// toggle between showing and not showing the expanded article with id=merrill //
document.getElementById('merrill').onclick = expandMerrillArticle;

function expandMerrillArticle() {
    let element = document.getElementById('merrill');
    element.classList.toggle('expanded-article');
}