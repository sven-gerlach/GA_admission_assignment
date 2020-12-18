// toggle between showing and not showing the expanded article
const companies = document.querySelectorAll(".company");
companies.forEach(company => {
    company.addEventListener("click", event => {
        const clickedCompany = event.currentTarget;
        clickedCompany.classList.toggle("expanded-article");
    });
});

// calculate height of footer and header needed to determine the offset to make the header sticky on all screen sizes //
let heightHeader = document.getElementById('header').clientHeight;
let heightNav = document.getElementById('nav').clientHeight;
document.getElementById('header').style.top = -heightHeader + heightNav + 'px'; //todo: Gives the correct results but slightly off on iPhone in vertical model and totally off in landscape mode //
