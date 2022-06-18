


document.getElementById("next").addEventListener("click", function () {
    let name = document.querySelector("#name_1").value;
    let phone = document.querySelector("#number_1").value
    let address_1 = document.querySelector("#address_line_1").value
    let address_2 = document.querySelector("#address_line_2").value
    let zip = document.querySelector("#zip").value
    let country = document.querySelector("#country").value
    let state = document.querySelector("#state").value
    let city = document.querySelector("#city").value
    let info = [name, phone, address_1, address_2, zip, country, state, city]


    let a = info.filter(function (elem) {
        console.log(elem)
        return elem == ""
    })
    if (a.length == 0) {
        localStorage.setItem("User_details", JSON.stringify(info))
        document.querySelector("#body").style.display = "none"
        document.querySelector("#body_2").style.display = "block"
    } else {
        alert("Invalid input")
    }
})

document.getElementById("pay").addEventListener("click", function () {
    let card = document.querySelector("#card").value
    let cvv = document.querySelector("#cvv").value
    let code = document.querySelector("#pass").value
    let bank_details = [card, cvv, code]
    console.log(bank_details)
    let a = bank_details.filter(function (elem) {
        console.log(elem)
        return elem == ""
    })
    console.log(a)
    if (a.length == 0) {
        console.log("in")
        if (code == "12345678") {
            console.log("incode verify")
            localStorage.setItem("bank", JSON.stringify(bank_details))
            document.querySelector("#body_2").style.display = "none"
            document.querySelector("#body_3").style.display = "flex"
        } else {
            alert("Wrong details")
        }
    } else {
        alert("Wrong details")
    }
})

document.querySelector("#home_1").addEventListener("click", function () {
    console.log("in")
    window.location.assign("home.html")
})