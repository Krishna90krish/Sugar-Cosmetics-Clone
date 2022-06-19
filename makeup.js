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




let productData =[
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
        ptag: "Air Kiss Powder Lipstick",
        pid: "t1",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.7(53)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        ptag: "Matte Attack Transferproof Lipstick",
        pid: "t2",
        price: "Rs.699",
        nprice: 699 ,
        
        prate: "⭐ 4.7(428)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        ptag: "Ace Of Face Foundation Stick",
        pid: "t3",
        price: "Rs.999",
        nprice: 999 ,
        
        prate: "⭐ 4.8(570)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
        ptag: "Matte As Hell Crayon Lipstick",
        pid: "t4",
        price: "Rs.799",
        nprice: 799 ,
        
        prate: "⭐ 4.5(13)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
        ptag: "Nothing Else Matter Longwear Lipstick",
        pid: "t5",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.7(188)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg?v=1644325813",
        ptag: "Smudge Me Not Liquid Lipstick",
        pid: "t6",
        price: "Rs.499",
        nprice: 499 ,
        
        prate: "⭐ 4.8(352)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
        ptag: "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
        pid: "t7",
        price: "Rs.249",
        nprice: 249,
        
        prate: "⭐ 4.8(97)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        ptag: "Contour De Force Face Palette",
        pid: "t8",
        price: "Rs.799",
        nprice: 799,
        
        prate: "⭐ 4.7(318)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg?v=1619102626",
        ptag: "Contour De Force Mini Blush",
        pid: "t9",
        price: "Rs.349",
        nprice:349 ,
        
        prate: "⭐ 4.8(148)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
        ptag: "Contour De Force Mini Bronzer",
        pid: "t10",
        price: "Rs.399",
        nprice: 399,
        
        prate: "⭐ 4.7(33)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",
        ptag: "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
        pid: "t11",
        price: "Rs.499",
        nprice: 499 ,
        
        prate: "⭐ 4.8(81)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
        ptag: "Bling Leader Illuminating Moisturizer",
        pid: "t12",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.7(143)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",
        ptag: "Dream Cover SPF15 Mattifying Compact",
        pid: "t13",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.7(223)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
        ptag: "Arch Arrival Brow Definer",
        pid: "t14",
        price: "Rs.499",
        nprice:499 ,
        
        prate: "⭐ 4.8(167)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
        ptag: "Base Of Glory Pore Minimizing Primer",
        pid: "t15",
        price: "Rs.799",
        nprice:799 ,
        
        prate: "⭐ 4.8(269)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594",
        ptag: "Gloss Boss 24HR Eyeliner - 01 Back In Black (Black)",
        pid: "t16",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.8(23)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113",
        ptag: "Mettle Satin Lipstick",
        pid: "t17",
        price: "Rs.999",
        nprice: 999,
        
        prate: "⭐ 4.8(168)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
        ptag: "Blend The Rules Eyeshadow Palette",
        pid: "t18",
        price: "Rs.1199",
        nprice: 1199 ,
        
        prate: "⭐ 4.8(96)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
        ptag: "Goddess Of Flawless SPF30+ BB Cream",
        pid: "t19",
        price: "Rs.699",
        nprice: 699 ,
        
        prate: "⭐ 4.7(119)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-02-pink-pinnacle-deep-rose-12785043669075.jpg?v=1619102659",
        ptag: "Contour De Force Mini Blush - 02 Pink Pinnacle (Deep Rose)",
        pid: "t20",
        price: "Rs.349",
        nprice: 349,
        
        prate: "⭐ 5(6)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
        ptag: "Set The Tone Tinted Powder",
        pid: "t21",
        price: "Rs.699",
        nprice: 699,
        
        prate: "⭐ 4.7(73)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-01-black-swan-black-13954562654291.jpg?v=1619116881",
        ptag: "Eye Warned You So! Double Matte Eyeliner",
        pid: "t22",
        price: "Rs.699",
        nprice:699 ,
        
        prate: "⭐ 4.8(57)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-01-brazen-raisin-burgundy-13200661643347.jpg?v=1619108721",
        ptag: "Smudge Me Not Lip Duos",
        pid: "t23",
        price: "Rs.599",
        nprice: 599,
        
        prate: "⭐ 4.5(38)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021",
        ptag: "The Most Eligiblur Correcting Primer",
        pid: "t24",
        price: "Rs.799",
        nprice: 799 ,
        
        prate: "⭐ 5(1)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        ptag: "All Set To Go Banana Powder",
        pid: "t25",
        price: "Rs.1099",
        nprice: 1099,
        
        prate: " ", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-most-eligiblur-smoothing-primer-28122626162771.jpg?v=1619115330",
        ptag: "The Most Eligiblur Smoothing Primer",
        pid: "t26",
        price: "Rs.799",
        nprice:799 ,
        
        prate: "⭐ 4.8(43)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-13200549380179.jpg?v=1619110238",
        ptag: "Mettle Liquid Lipstick",
        pid: "t27",
        price: "Rs.599",
        nprice: 599,
        
        prate: "⭐ 4.9(76)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lipping-on-the-edge-lip-liner-01-taffeta-terracotta-13278188568659.jpg?v=1619109027",
        ptag: "Lipping On The Edge Lip Liner",
        pid: "t28",
        price: "Rs.499",
        nprice: 499 ,
        
        prate: "⭐ 4.8(57)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_270fb7dc-e51b-4c12-8bcf-18919fd35415.jpg?v=1652942969",
        ptag: "Lipping On The Edge Lip Liner",
        pid: "t29",
        price: "Rs.799",
        nprice: 799,
        
        prate: "", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-seal-the-show-lip-primer-14162590433363.jpg?v=1619106825",
        ptag: "Seal The Show Lip Primer",
        pid: "t30",
        price: "Rs.599",
        nprice: 599 ,
        
        prate: "⭐ 4.6(71)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-01-the-big-bang-berry-wine-13204815937619.jpg?v=1619100487",
        ptag: "It's A-pout Time! Vivid Lipstick",
        pid: "t31",
        price: "Rs. 359",
        nprice: 359 ,
        
        prate: "⭐ 4.7(481)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1CREATIVEIMAGE01.jpg?v=1639496051",
        ptag: "Born To Wing Gel Eyeliner",
        pid: "t32",
        price: "Rs.599",
        nprice: 599,
        
        prate: "⭐ 4.7(137)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-time-to-shine-lip-gloss-13905851580499.jpg?v=1619116676",
        ptag: "Time To Shine Lip Gloss",
        pid: "t33",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.6(71)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_aab4d2fb-22ff-4c06-b906-608c50c2cce5.jpg?v=1639582378",
        ptag: "Stroke Of Genius Heavy-Duty Kohl",
        pid: "t34",
        price: "Rs.499",
        nprice: 499,
        
        prate: "⭐ 4.8(83)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-powder-play-translucent-compact-28122598932563.jpg?v=1619116304",
        ptag: "Powder Play Translucent Compact",
        pid: "t35",
        price: "Rs.599",
        nprice:599,
        
        prate: "⭐ 4.7(31)", quantity: 0
        , 
    },
    {
      
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lash-mob-limitless-mascara-01-black-with-a-bang-black-12775589871699.jpg?v=1619100706",
        ptag: "Lash Mob Limitless Mascara - 01 Black With A Bang (Black)",
        pid: "t36",
        price: "Rs. 799",
        nprice: 799,
        
        prate: "⭐ 4.7(41)", quantity: 0
        , 
    },
  
]
let pdata = document.querySelector("#Product");
let filter = document.querySelector("#Filter");
let cartls = JSON.parse(localStorage.getItem("ADDED")) || [];
displayProducts(productData);
function displayProducts(productData) {
    pdata.innerHTML = ""
    productData.forEach(function (elem) {

     
        let prds = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = elem.pimg;
        let tag = document.createElement("h2");
        tag.innerText = elem.ptag;
        let rate = document.createElement("p");
        rate.innerText = elem.price;
       
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

        prds.append(img, tag, rate,  rateing, addtocar);
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
