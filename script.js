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

// calculate height of footer and header //
let heightHeader = document.getElementById('header').clientHeight;
let heightNav = document.getElementById('nav').clientHeight;
document.getElementById('header').style.top = -heightHeader + heightNav + 'px'; //todo: based on the responsive design mode in Mozilla the height this code returns does not appear to work in iPhone screen size mode. Could it be a view-port issue rather than a wrong calc? //