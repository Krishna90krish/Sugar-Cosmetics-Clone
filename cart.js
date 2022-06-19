document.querySelector("div>#offers_img").addEventListener("click", function () {
    window.location.assign("offers.html")
})
document.querySelector("#home_page_1").addEventListener("click", function () {
    window.location.assign("home.html")
})
document.querySelector("div>#gotocart").addEventListener("click", function () {
    window.location.assign("cart.html")
})
document.querySelector("#bottomnav>div>#makeup").addEventListener("click", function () {
    window.location.assign("makeup.html")
})
document.querySelector("#bottomnav>div>#brush").addEventListener("click", function () {
    window.location.assign("brush.html")
})
document.querySelector("#bottomnav>div>#skincare").addEventListener("click", function () {
    window.location.assign("skincare.html")
})
document.querySelector("#bottomnav>div>#trending").addEventListener("click", function () {
    window.location.assign("trending.html")
})
document.querySelector("#bottomnav>div>#blog").addEventListener("click", function () {
    window.location.assign("https://blog.sugarcosmetics.com/")
})
document.querySelector("#bottomnav>div>#offers").addEventListener("click", function () {
    window.location.assign("offers.html")
})



//navbar function
let display_name = localStorage.getItem("name") || ""
if (display_name != "") {
    document.getElementById("loginS").innerText = display_name
} else {

    document.getElementById("loginS").addEventListener("click", open)
    let login = document.getElementById("login")
    let button = document.getElementById("login-off")
    button.addEventListener("click", close)
    function open() {
        event.preventDefault()
        login.classList.add("login-open")
    }
    function close() {
        event.preventDefault()
        login.classList.remove("login-open")
    }
    // otp request
    let mobile = document.getElementById("request-otp")
    mobile.addEventListener("click", mobileVerify)
    function mobileVerify() {
        event.preventDefault()
        console.log("inside")
        let phoneno = document.getElementById("phone").value
        console.log(phoneno)
        if (phoneno.length == 10) {
            alert("verify your otp")
        } else {
            alert("enter a valid phone no")
        }
    }
    // "verify"

    let verify = document.getElementById("otp-button")
    verify.addEventListener("click", Myfunction)
    function Myfunction() {
        event.preventDefault()
        console.log("inside function")
        let otp = document.getElementById("otp").value
        if (otp == "1234") {
            let name = document.getElementById("getname").value
            localStorage.setItem("name", name)
            localStorage.setItem("status", "online")
            window.location.reload()
        } else {
            alert("wrong otp")
        }
    }

}
document.querySelector("div>#gotocart").addEventListener("click", function () {
    window.location.assign("cart.html")

})

document.querySelector("#bottomnav>div>#brush").addEventListener("click", function () {
    window.location.assign("brush.html")
})


// navbarfuntion
let cartLS = JSON.parse(localStorage.getItem("ADDED")) || []
let cart_total = 0;
let check = false
if (cartLS[0] == undefined) {
    document.querySelector("#symbol").style.display = "flex"
    document.querySelector("#cartopen").style.display = "none"

}
else {
    document.querySelector("#symbol").style.display = "none"
    document.querySelector("#cartopen").style.display = "flex"
    DisplayCartProducts(cartLS)
}

function DisplayCartProducts(cartLS) {
    document.querySelector("#items").innerHTML = ""
    cart_total = 0
    cartLS.forEach(function (elem, index) {
        cart_total += (elem.nprice * elem.quantity)
        let outter_div = document.createElement("div")

        let inner_div_1 = document.createElement("div")

        let inner_div_1_img = document.createElement("img")
        inner_div_1_img.src = elem.pimg
        let inner_div_1_p = document.createElement("p")
        inner_div_1_p.innerText = elem.pname + "-Quantity: " + elem.quantity

        let inner_div_2 = document.createElement("div")
        let inner_div_2_div = document.createElement("div")
        let inner_div_2_p1 = document.createElement("p")
        inner_div_2_p1.innerText = "+Add Items"
        inner_div_2_p1.addEventListener("click", function () {
            elem.quantity++;
            localStorage.setItem("ADDED", JSON.stringify(cartLS));
            window.location.reload()
        })
        let inner_div_2_p3 = document.createElement("p")
        inner_div_2_p3.innerText = " | -1 Remove Item | "
        inner_div_2_p3.addEventListener("click", function () {
            elem.quantity--;
            if (elem.quantity != 0) {
                localStorage.setItem("ADDED", JSON.stringify(cartLS));
                window.location.reload()
            } else {
                cartLS.splice(index, 1)
                localStorage.setItem("ADDED", JSON.stringify(cartLS));
            }
        })
        let inner_div_2_p2 = document.createElement("p")
        inner_div_2_p2.innerText = elem.price


        inner_div_1.append(inner_div_1_img, inner_div_1_p)
        inner_div_2_div.append(inner_div_2_p1, inner_div_2_p3, inner_div_2_p2)
        inner_div_2.append(inner_div_2_div)
        outter_div.append(inner_div_1, inner_div_2)
        document.querySelector("#items").append(outter_div)
    })
    document.querySelector("#cart-total").innerText = "Cart Total:  " + cart_total
    document.querySelector("#sub_1").innerText = "₹  " + cart_total
    document.querySelector("#sub_4").innerText = "₹  " + cart_total
}

document.querySelector("#capplied").addEventListener("click", function () {
    let promocode = document.querySelector("#promocode").value
    let a = cart_total
    let d = cart_total
    if (check == false) {
        if (promocode == "12ab") {
            check = true
            a *= 0.90
            d *= 0.10
            alert("Promocode Applied (You Can't Use it Again)")
        }
        document.querySelector("#sub_3").innerText = "₹  " + d
        document.querySelector("#sub_4").innerText = "₹  " + a
    } else {
        alert("PROMOCODE Already Aplied")
    }

})
document.querySelector("#continue>div").addEventListener("click", function () {
    window.location.assign("home.html")
})
document.querySelector("#continue>div:last-child").addEventListener("click", function () {
    window.location.assign("payment.html")
})
document.querySelector("#shopnow").addEventListener("click", function () {
    window.location.assign("home.html")
})

