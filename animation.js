(function () {
    let slider1 = document.querySelector(".imageAnimation");
    let content1 = document.querySelector(".content1");

    displayGoBoating();

    function displayGoBoating() {
        slider1.src = "goBoating.jpg";
        content1.textContent = "Хочешь поплавать?";
        setTimeout(displayFish, 4000);
    }

    function displayFish() {
        slider1.src = "fish.jpg";
        content1.textContent = "Или наловить много рыбы?";
        setTimeout(displayCatchMoment, 4000);
    }

    function displayCatchMoment() {
        slider1.src = "catchMoment.jpg";
        content1.textContent = "Лови момент";
        setTimeout(displayGoBoating, 4000);
    }
})();