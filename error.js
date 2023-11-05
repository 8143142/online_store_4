const addCardBtns = document.querySelectorAll(".addcardbtn");
const cardErrors = document.querySelectorAll(".card-error");
const errorSound = document.getElementById("error-sound");

addCardBtns.forEach((button, index) => {
    button.addEventListener("mouseenter", () => {
        cardErrors[index].style.display = "block";
    });

    button.addEventListener("mouseleave", () => {
        cardErrors[index].style.display = "none";
    });

    button.addEventListener("click", () => {
        cardErrors[index].classList.add("animated");

        errorSound.play();

        setTimeout(() => {
            cardErrors[index].classList.remove("animated");
        }, 500);
    });
});
