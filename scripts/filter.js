const filter = document.querySelector("#btn-filter");
const filter_menu = document.getElementById("filter-list")
const filter_release = document.querySelector("#btn-filter-rel");
const filter_exp = document.querySelector("#btn-filter-exp");
const releases = document.querySelectorAll("#li-rel");
const experimentals = document.querySelectorAll("#li-exp");

filter.addEventListener("click", function() {
    filter_menu.classList.toggle("filter-list-active")
})

filter_release.addEventListener("click", function() {
    console.log("clicked")
    releases.forEach((release) => {
        release.classList.toggle("li-hidden")
        release.classList.toggle("experiments-list")
    })
})

filter_exp.addEventListener("click", function() {
    console.log("clicked")
    experimentals.forEach((experiment) => {
        experiment.classList.toggle("li-hidden")
        experiment.classList.toggle("experiments-list")
    })
})