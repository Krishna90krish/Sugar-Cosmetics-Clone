document.getElementById("next").addEventListener("click", function () {
    document.querySelector("#body").style.display = "none"
    document.querySelector("#body_2").style.display = "block"
})

document.getElementById("pay").addEventListener("click", function () {
    document.querySelector("#body_2").style.display = "none"
})