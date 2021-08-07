var email = document.querySelector("#email");
const github = document.querySelector("#github");
const linkedin = document.querySelector("#linkedin");
const largeCard = document.querySelector("#large-card");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");
const card8 = document.querySelector("#card8");

email.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('mailto:adaspeaks@gmail.com','_blank');
});

github.addEventListener("click", function(event) {
    event.preventDefault();

    window.open('https://www.github.com/adaspeaks/','_blank');
});

linkedin.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/johnny-brown-7106a0219/','_blank');
});

largeCard.addEventListener("click", function(event) {
    window.open('https://github.com/rcuevas17/InTents', '_blank');
});

card2.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Adaspeaks/Chicken-Boolean', '_blank');
});

card3.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/stongems/PhoenixSky', '_blank');
});

card4.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Adaspeaks/E-Commerce-Backend', '_blank');
});

card5.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Adaspeaks/progressiveBudgetTracker', '_blank');
});

card6.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Adaspeaks/workoutTracker', '_blank');
});

card7.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://github.com/Adaspeaks/techBlog', '_blank');
});

card8.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://gist.github.com/Adaspeaks/69b51e0a617682c9c924bb28419dee93', '_blank');
});
