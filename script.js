
// 1. GET THE HTML ELEMENTS

const themeButton = document.getElementById("theme-toggle");


// 2. DARK MODE AND LIGHT MODE

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "Dark Mode";

    } else {

        themeButton.textContent = "Light Mode";

    }

});


// 3. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
