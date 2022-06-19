// NAVBAR FUNCTION COPY
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
let productData = [
    {
        pname: "AQUAHOLIC HYDRATING STICK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294",
        ptag: "AQUAHOLIC HYDRATING STICK",
        pid: "b1",
        price: "RS.899",
        nprice: 899,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CHARCOAL PATROL BUBBLE MASK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        ptag: "CHARCOAL PATROL BUBBLE MASK",
        pid: "b2",
        price: "Rs.149",
        nprice: 149,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CHEAT SHEET CLARIFYING MASK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        ptag: "CHEAT SHEET CLARIFYING MASK",
        pid: "b3",
        price: "Rs.99",
        nprice: 99,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CITRUS MOISTURIZER",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
        ptag: "CITRUS MOISTURIZER",
        pid: "b4",
        price: "Rs.499",
        nprice: 499,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "POWER CLAY MASK STICK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
        ptag: "POWER CLAY MASK STICK",
        pid: "b5",
        price: "Rs.699",
        nprice: 699,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "ILLUMINATING SUNSCREEN",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        ptag: "ILLUMINATING SUNSCREEN",
        pid: "b6",
        price: "Rs.599",
        nprice: 599,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CITRUS GOT REAL BRIGHTENNING PEEL",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646235720",
        ptag: "CITRUS GOT REAL BRIGHTENNING PEEL",
        pid: "b7",
        price: "Rs.599",
        nprice: 599,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CITRUS REAL SPF30 SUNSCREEN",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",
        ptag: "CITRUS REAL SPF30 SUNSCREEN",
        pid: "b8",
        price: "Rs.399",
        nprice: 399,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CITRUS REAL COOLING STICK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",
        ptag: "CITRUS REAL COOLING STICK",
        pid: "b9",
        price: "Rs.399",
        nprice: 399,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "CHEAT SHEET ANTI-AGING MASK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        ptag: "CHEAT SHEET ANTI-AGING MASK",
        pid: "b10",
        price: "Rs.99",
        nprice: 99,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },
    {
        pname: "COFFE CULTURE EYE FIRMING CREAM",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
        ptag: "COFFE CULTURE EYE FIRMING CREAM",
        pid: "b11",
        price: "Rs.399",
        nprice: 399,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "AQUAHOLIC PORE EXFOLIATING SCRUB",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
        ptag: "AQUAHOLIC PORE EXFOLIATING SCRUB",
        pid: "b12",
        price: "Rs.399",
        nprice: 399,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "AQUAHOLIC HYDRATING PRIMER",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
        ptag: "AQUAHOLIC HYDRATING PRIMER",
        pid: "b13",
        price: "Rs.699",
        nprice: 699,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "AQUAHOLIC CLARIFYING SPOT GEL",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",
        ptag: "AQUAHOLIC CLARIFYING SPOT GEL",
        pid: "b14",
        price: "Rs.399",
        nprice: 399,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "CITRUS GOT REAL RETINOL",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
        ptag: "CITRUS GOT REAL RETINOL",
        pid: "b15",
        price: "Rs.499",
        nprice: 499,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "ILLUMINATING SPF35 SUNSCREEN",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_547e9188-e44c-4cf7-a32e-fc0f410e8062.jpg?v=1651852720",
        ptag: "ILLUMINATING SPF35 SUNSCREEN",
        pid: "b16",
        price: "Rs.599",
        nprice: 599,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "ILLUMINATING SPF35 PA+++ SUNSCREEN",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e5df3bb8-4439-4980-ada2-aa90b126ada3.jpg?v=1651852746",
        ptag: "ILLUMINATING SPF35 PA+++ SUNSCREEN",
        pid: "b17",
        price: "Rs.599",
        nprice: 599,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "ACNE COMBO (PACK OF 6)",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        ptag: "ACNE COMBO (PACK OF 6)",
        pid: "b18",
        price: "Rs.559",
        nprice: 559,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "COFFE CULTURE PORE PURIFYING MASK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
        ptag: "COFFE CULTURE PORE PURIFYING MASK",
        pid: "b19",
        price: "Rs.499",
        nprice: 499,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    }, {
        pname: "AQUAHOLIC INSTANT PORE CLEANSING MASK",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
        ptag: "AQUAHOLIC INSTANT PORE CLEANSING MASK",
        pid: "b20",
        price: "Rs.499",
        nprice: 499,
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "",
    },


]
let pdata = document.querySelector("#Product");
let filter = document.querySelector("#Filter");
let sort_1 = document.querySelector("#sort")
let cartls = JSON.parse(localStorage.getItem("ADDED")) || [];
displayProducts(productData);
function displayProducts(productData) {
    pdata.innerHTML = ""
    productData.forEach(function (elem) {

        // pdata.innerHTML="";
        let prds = document.createElement("div");
        //    let prd2=document.createElement("div")
        let img = document.createElement("img");
        img.src = elem.pimg;
        let tag = document.createElement("h2");
        tag.innerText = elem.ptag;
        let rate = document.createElement("p");
        rate.innerText = elem.price;
        let categ = document.createElement("p");
        categ.innerText = "";
        let rateing = document.createElement("p");
        rateing.innerText = elem.prate;

        let addtocar = document.createElement("button");
        addtocar.innerText = "ADD TO CART";

        addtocar.addEventListener("click", function () {
            let findpresence = cartls.filter(function (element) {
                return element.pid == elem.pid
            })
            console.log(elem)
            if (findpresence.length == 0) {
                quantity = 0
                elem.quantity++
                cartls.push(elem)
                console.log(cartls)

                localStorage.setItem("ADDED", JSON.stringify(cartls));

            }
            else {
                elem.quantity++
                localStorage.setItem("ADDED", JSON.stringify(cartls));
                alert(elem.quantity + " Quantity added")
            }
        })
        prds.addEventListener("mouseover", function () {
            addtocar.style.backgroundColor = "black"
        })
        prds.addEventListener("mouseout", function () {
            addtocar.style.backgroundColor = "white"

        })
        prds.append(img, tag, rate, categ, rateing, addtocar);
        pdata.append(prds);

    })
}
filter.addEventListener("change", function () {

    if (filter.value == "All") {
        displayProducts(productData)
    }
    else {
        let filterdata = productData.filter(function (elem) {
            return elem.fill == filter.value
        })
        displayProducts(filterdata)
    }
})
sort_1.addEventListener("change", function () {
    if (sort.value == "All") {
        displayProducts(productData)
    }
    else if (sort.value == "asc") {
        let filterdata = productData.sort(function (a, b) {
            return a.nprice - b.nprice
        })
        displayProducts(filterdata)
    } else if (sort.value == "dsc") {
        let filterdata = productData.sort(function (a, b) {
            return b.nprice - a.nprice
        })
        displayProducts(filterdata)
    }
})

function addtocarFun(id) {
    for (let i = 0; i < cartls.length; i++) {
        if (cartls[i].pid == id) {
            return false;
        }
        else {
            return true;
        }
    }
}

