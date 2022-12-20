const decret = document.getElementById("decret");
const audio = new Audio("/audio/register6.mp3");
const click = new Audio("/audio/bebaw.mp3");
let counter = 0;

decret.addEventListener("click", function() {
    counter += 1;
    if (counter == 6) {
        counter = 0;
        console.log("CLEAN UP, REGISTER 6!")
        audio.play();
    }
})