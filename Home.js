// NAVBAR FUNCTION COPY
document.querySelector("div>#offers_img").addEventListener("click", function () {
    window.location.assign("offers.html")
})
document.querySelector("#home_page_1").addEventListener("click", function () {
    window.location.assign("index.html")
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

// NAVBAR FUNCTION COPY
// mouse over script
document.querySelector("#first_slide").addEventListener("mouseover", function () {
    document.querySelector("#first_slide>div").style.display = "flex"
    document.querySelector("#first_slide>div:nth-child(2)").style.display = "flex"


})
document.querySelector("#first_slide").addEventListener("mouseout", function () {
    document.querySelector("#first_slide>div:nth-child(2)").style.display = "none"
    document.querySelector("#first_slide>div").style.display = "none"

})

document.querySelector("#second_slide_image ").addEventListener("mouseover", function () {
    document.querySelector("#second_slide_image > .second_slide_image_button").style.display = "grid"

    document.querySelector("#second_slide_image > div:last-child").style.display = "grid"


})
document.querySelector("#second_slide_image").addEventListener("mouseout", function () {
    document.querySelector("#second_slide_image > .second_slide_image_button").style.display = "none"
    document.querySelector("#second_slide_image > div:last-child").style.display = "none"

})

document.querySelector("#third_slide ").addEventListener("mouseover", function () {

    document.querySelector("#third_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#third_slide>div:nth-child(2)").style.display = "grid"


})
document.querySelector("#third_slide").addEventListener("mouseout", function () {
    document.querySelector("#third_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#third_slide> div:nth-child(2)").style.display = "none"

})


document.querySelector("#fourth_slide ").addEventListener("mouseover", function () {


    document.querySelector("#fourth_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#fourth_slide>div:nth-child(2)").style.display = "grid"


})
document.querySelector("#fourth_slide").addEventListener("mouseout", function () {
    document.querySelector("#fourth_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#fourth_slide> div:nth-child(2)").style.display = "none"

})



document.querySelector("#fivth_slide").addEventListener("mouseover", function () {


    document.querySelector("#fivth_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#fivth_slide>div:nth-child(2)").style.display = "grid"


})
document.querySelector("#fivth_slide").addEventListener("mouseout", function () {
    document.querySelector("#fivth_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#fivth_slide> div:nth-child(2)").style.display = "none"

})

document.querySelector("#shorts ").addEventListener("mouseover", function () {


    document.querySelector("#shorts>div:nth-child(1)").style.display = "grid"
    document.querySelector("#shorts>div:nth-child(6)").style.display = "grid"


})
document.querySelector("#shorts").addEventListener("mouseout", function () {
    document.querySelector("#shorts> div:nth-child(1)").style.display = "none"
    document.querySelector("#shorts> div:nth-child(6)").style.display = "none"

})
document.querySelector("#seventh_image ").addEventListener("mouseover", function () {


    document.querySelector("#seventh_image>div:nth-child(1)").style.display = "grid"
    document.querySelector("#seventh_image>div:nth-child(3)").style.display = "grid"


})
document.querySelector("#seventh_image").addEventListener("mouseout", function () {
    document.querySelector("#seventh_image> div:nth-child(1)").style.display = "none"
    document.querySelector("#seventh_image> div:nth-child(3)").style.display = "none"

})
document.querySelector("#sixth_slide ").addEventListener("mouseover", function () {


    document.querySelector("#sixth_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#sixth_slide>div:nth-child(5)").style.display = "grid"


})
document.querySelector("#sixth_slide").addEventListener("mouseout", function () {
    document.querySelector("#sixth_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#sixth_slide> div:nth-child(5)").style.display = "none"

})
document.querySelector("#eight_image ").addEventListener("mouseover", function () {


    document.querySelector("#eight_image>div:nth-child(1)").style.display = "grid"
    document.querySelector("#eight_image>div:nth-child(3)").style.display = "grid"


})
document.querySelector("#eight_image").addEventListener("mouseout", function () {
    document.querySelector("#eight_image> div:nth-child(1)").style.display = "none"
    document.querySelector("#eight_image> div:nth-child(3)").style.display = "none"

})
document.querySelector("#ninth_image ").addEventListener("mouseover", function () {


    document.querySelector("#ninth_image>div:nth-child(1)").style.display = "grid"
    document.querySelector("#ninth_image>div:nth-child(3)").style.display = "grid"


})
document.querySelector("#ninth_image").addEventListener("mouseout", function () {
    document.querySelector("#ninth_image> div:nth-child(1)").style.display = "none"
    document.querySelector("#ninth_image> div:nth-child(3)").style.display = "none"

})
document.querySelector("#tenth_slide ").addEventListener("mouseover", function () {


    document.querySelector("#tenth_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#tenth_slide>div:nth-child(5)").style.display = "grid"


})
document.querySelector("#tenth_slide").addEventListener("mouseout", function () {
    document.querySelector("#tenth_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#tenth_slide> div:nth-child(5)").style.display = "none"

})
document.querySelector("#eleventh_image ").addEventListener("mouseover", function () {


    document.querySelector("#eleventh_image>div:nth-child(1)").style.display = "grid"
    document.querySelector("#eleventh_image>div:nth-child(3)").style.display = "grid"


})
document.querySelector("#eleventh_image").addEventListener("mouseout", function () {
    document.querySelector("#eleventh_image> div:nth-child(1)").style.display = "none"
    document.querySelector("#eleventh_image> div:nth-child(3)").style.display = "none"

})
document.querySelector("#twelve_slide ").addEventListener("mouseover", function () {


    document.querySelector("#twelve_slide>div:nth-child(1)").style.display = "grid"
    document.querySelector("#twelve_slide>div:nth-child(6)").style.display = "grid"


})
document.querySelector("#twelve_slide").addEventListener("mouseout", function () {
    document.querySelector("#twelve_slide> div:nth-child(1)").style.display = "none"
    document.querySelector("#twelve_slide> div:nth-child(6)").style.display = "none"

})

// Mouse over script


document.querySelector(".cen").addEventListener("click", function () {
    window.location.href = "https://in.sugarcosmetics.com/in.sugarcosmetics.com/referral"
})



// change img Script
let slide_1 = 0
let first_slide_img_arr = [
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg"
        , redirect: "https://in.sugarcosmetics.com/collections/mattely-in-love"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/309d5880-c650-4773-9cb9-5b8efc593ac0.jpg"
        , redirect: "https://in.sugarcosmetics.com/collections/all-makeup"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif"
        , redirect: "https://in.sugarcosmetics.com/products/air-kiss-powder-lipstick"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg"
        , redirect: "https://in.sugarcosmetics.com/products/lip-zip-matte-topper"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg"
        , redirect: "https://in.sugarcosmetics.com/products/9-to-5-makeup-kit"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg"
        , redirect: "https://in.sugarcosmetics.com/products/mettle-priming-balm"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg"
        , redirect: "https://in.sugarcosmetics.com/sugar-clearance"
    },
    {
        imglink: "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg"
        , redirect: "https://in.sugarcosmetics.com/products/sweat-no-more-makeup-kit"
    }
]
document.querySelector("#first_slide>div:first-child").addEventListener("click", function () {
    slide_1 -= 1;
    if (slide_1 < 0) {
        slide_1 = first_slide_img_arr.length - 1
    }
    document.querySelector("#first_slide_image").setAttribute("src", first_slide_img_arr[slide_1].imglink)
})
document.querySelector("#first_slide>div:nth-child(2)").addEventListener("click", function () {
    slide_1 += 1;
    if (slide_1 == first_slide_img_arr.length) {
        slide_1 = 0
    }
    document.querySelector("#first_slide_image").setAttribute("src", first_slide_img_arr[slide_1].imglink)
})
document.querySelector("#first_slide>img").addEventListener("click", function () {
    window.location.assign(first_slide_img_arr[slide_1].redirect)
})







let slide_3 = 0
let third_slide_img_arr = [
    { imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg", redirect: "https://in.sugarcosmetics.com/collections/quick-tips-makeup-routine-as-per-skin-type" },
    { imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg", redirect: "https://in.sugarcosmetics.com/collections/quick-tips-base-makeup-application-order" },
    { imglink: "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg", redirect: "https://in.sugarcosmetics.com/collections/quick-tips-eye-brushes-guide" }
]
document.querySelector("#third_slide>div:first-child").addEventListener("click", function () {
    slide_3--;
    if (slide_3 < 0) {
        slide_3 = third_slide_img_arr.length - 1
    }
    document.querySelector("#third_slide_image").setAttribute("src", third_slide_img_arr[slide_3].imglink)
})
document.querySelector("#third_slide>div:nth-child(2)").addEventListener("click", function () {
    slide_3 += 1;
    if (slide_3 >= third_slide_img_arr.length) {
        slide_3 = 0
    }
    document.querySelector("#third_slide_image").setAttribute("src", third_slide_img_arr[slide_3].imglink)
})
document.querySelector("#third_slide>img").addEventListener("click", function () {
    window.location.assign(third_slide_img_arr[slide_3].redirect)
})

let slide_4 = 0
let fourth_slide_img_arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e4f6c286-358b-43f1-8f53-c26aa0718c57.jpg",
    "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6d99e54c-1213-4184-a8f8-0aca166a298f.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg",
]

document.querySelector("#fourth_slide>div:first-child").addEventListener("click", function () {
    slide_4--;
    if (slide_4 < 0) {
        slide_4 = fourth_slide_img_arr.length - 1
    }
    document.querySelector("#fourth_slide >div:nth-child(3)>img ").setAttribute("src", fourth_slide_img_arr[slide_4])
    slide_4--;
    if (slide_4 < 0) {
        slide_4 = fourth_slide_img_arr.length - 1
    }
    document.querySelector("#fourth_slide> div:nth-child(4) > img").setAttribute("src", fourth_slide_img_arr[slide_4])
    slide_4--;
    if (slide_4 < 0) {
        slide_4 = fourth_slide_img_arr.length - 1
    }
    document.querySelector("#fourth_slide> div:nth-child(5) > img").setAttribute("src", fourth_slide_img_arr[slide_4])
})

document.querySelector("#fourth_slide>div:nth-child(2)").addEventListener("click", function () {
    slide_4++;
    if (slide_4 >= fourth_slide_img_arr.length) {
        slide_4 = 0
    }
    document.querySelector("#fourth_slide >div:nth-child(3)>img ").setAttribute("src", fourth_slide_img_arr[slide_4])
    slide_4++;
    if (slide_4 >= fourth_slide_img_arr.length) {
        slide_4 = 0
    }
    document.querySelector("#fourth_slide> div:nth-child(4) > img").setAttribute("src", fourth_slide_img_arr[slide_4])
    slide_4++;
    if (slide_4 >= fourth_slide_img_arr.length) {
        slide_4 = 0
    }
    document.querySelector("#fourth_slide> div:nth-child(5) > img").setAttribute("src", fourth_slide_img_arr[slide_4])
})


let slide_5 = 0
let fivth_slide_img_arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg",
]
document.querySelector("#fivth_slide>div:first-child").addEventListener("click", function () {
    slide_5--;
    if (slide_5 < 0) {
        slide_5 = fivth_slide_img_arr.length - 1
    }
    document.querySelector("#fivth_slide_image").setAttribute("src", fivth_slide_img_arr[slide_5])
})
document.querySelector("#fivth_slide>div:nth-child(2)").addEventListener("click", function () {
    slide_5 += 1;
    if (slide_5 >= fivth_slide_img_arr.length) {
        slide_5 = 0
    }
    document.querySelector("#fivth_slide_image").setAttribute("src", fivth_slide_img_arr[slide_5])
})

//shorts_slide
let shorts_slide = 0
let shorts_data = [
    "https://cdn4.fireworktv.com/medias/2022/6/13/1655117515-auwlnygr/watermarked/540/7dd51bb6b9d044ee9920301f4573d9261.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/13/1655124425-rtfcalou/watermarked/540/InShot_20220613_180813047.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/13/1655117001-qixpvzty/transcoded/480/7b3bf791506243339c3382787bb694e6.jpg.62.webp",
    "https://cdn4.fireworktv.com/medias/2022/6/13/1655118375-udlvmqir/transcoded/480/WhatsAppVideo2022-06-13at4.33.40PM.jpg.62.webp",
    "https://cdn4.fireworktv.com/medias/2022/6/13/1655117448-ukahzifr/transcoded/480/sugartransformation.jpg.62.webp",
    "https://cdn4.fireworktv.com/medias/2022/6/6/1654517730-sanrhtjm/watermarked/540/BARSHAPATRAREVIEW_VERTICALMASTER.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/6/1654521278-gvoxjphn/watermarked/540/InShot_20220606_183714941.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/6/1654520524-azbpyncu/watermarked/540/WhatsAppVideo2022-06-06at6.30.04PM.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/6/1654523196-cerytzfi/watermarked/540/InShot_20220606_184405136.mp4",
    "https://cdn4.fireworktv.com/medias/2022/6/6/1654522721-ykfqsiul/watermarked/540/WhatsAppVideo2022-06-06at6.55.28PM.mp4",
    "https://cdn4.fireworktv.com/medias/2022/5/31/1654002734-nryewlti/watermarked/540/WhatsAppVideo2022-05-31at6.40.39PM.mp4",
]

document.querySelector("#shorts>div:first-child").addEventListener("click", function () {
    for (let i = 2; i < 6; i++) {
        shorts_slide--
        if (shorts_slide < 0) {
            shorts_slide = shorts_data.length - 1
        }
        document.querySelector("#shorts >div:nth-child(" + i + ")>video").setAttribute("src", shorts_data[shorts_slide])
    }
})
document.querySelector("#shorts>div:last-child").addEventListener("click", function () {
    for (let i = 2; i < 6; i++) {
        shorts_slide++
        if (shorts_slide >= shorts_data.length) {
            shorts_slide = 0
        }
        document.querySelector("#shorts >div:nth-child(" + i + ")>video").setAttribute("src", shorts_data[shorts_slide])
    }
})


let slide_6 = 0
let sixth_slide_img_arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f40172c6-147a-4895-ac1f-d430c3cc0a55.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/9a090aa5-6bd8-4d10-a77f-409c3619fc89.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2ef5fc68-77d8-4083-9a4d-f37f42e98feb.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/58490d17-977a-46d4-ae71-c9baf559a736.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a246bd5c-0383-4f03-905c-d6ab7f3bdb23.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/ea727dfe-f673-4cb5-b9b3-354bcf5c41a2.jpg",
]
document.querySelector("#sixth_slide>div:first-child").addEventListener("click", function () {
    for (let i = 2; i < 5; i++) {
        slide_6--
        if (slide_6 < 0) {
            slide_6 = sixth_slide_img_arr.length - 1
        }
        document.querySelector("#sixth_slide >div:nth-child(" + i + ")>img").setAttribute("src", sixth_slide_img_arr[slide_6])
    }



})
document.querySelector("#sixth_slide>div:last-child").addEventListener("click", function () {
    for (let i = 2; i < 5; i++) {
        slide_6++
        if (slide_6 > sixth_slide_img_arr.length - 1) {
            slide_6 = 0
        }
        document.querySelector("#sixth_slide >div:nth-child(" + i + ")>img").setAttribute("src", sixth_slide_img_arr[slide_6])

    }
})

let slide_10 = 0
let tenth_slide_img_arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/47cd2c21-b320-4473-8fdc-9eb49ddefdda.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f41ec860-3e9d-46b1-8c48-8ad7feb8d9e8.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/5959a7b1-efdd-4fce-812a-c6a940fcdcd9.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b9a64f84-817c-4984-a9e3-a75ec31843e4.jpg",
]

document.querySelector("#tenth_slide>div:first-child").addEventListener("click", function () {
    for (let i = 2; i < 5; i++) {
        slide_10--
        if (slide_10 < 0) {
            slide_10 = tenth_slide_img_arr.length - 1
        }
        document.querySelector("#tenth_slide >div:nth-child(" + i + ")>img").setAttribute("src", tenth_slide_img_arr[slide_10])
    }



})
document.querySelector("#tenth_slide>div:last-child").addEventListener("click", function () {
    for (let i = 2; i < 5; i++) {
        slide_10++
        if (slide_10 > tenth_slide_img_arr.length - 1) {
            slide_10 = 0

        }
        document.querySelector("#tenth_slide >div:nth-child(" + i + ")>img").setAttribute("src", tenth_slide_img_arr[slide_10])

    }
})

let slide_12 = 0
let twelve_slide_img_arr = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/f6d29c12-e7cf-476e-a654-b6697e0fa8de.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7b184616-6420-4992-ac33-23feeb482956.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/4188e9cd-11e4-452e-bec3-577894e7ec81.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/46e14c59-119d-4c5b-8055-819d8bf35e06.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/10374315-c48d-47b0-bb86-3374a2dde76b.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/eb4002ec-c165-4aaf-90b3-f813484fae25.jpg",
]
document.querySelector("#twelve_slide>div:first-child").addEventListener("click", function () {
    for (let i = 2; i < 6; i++) {
        slide_12--
        if (slide_12 < 0) {
            slide_12 = twelve_slide_img_arr.length - 1
        }
        document.querySelector("#twelve_slide >div:nth-child(" + i + ")>img").setAttribute("src", twelve_slide_img_arr[slide_12])
    }
})
document.querySelector("#twelve_slide>div:last-child").addEventListener("click", function () {
    for (let i = 2; i < 6; i++) {
        slide_12++
        if (slide_12 > twelve_slide_img_arr.length - 1) {
            slide_12 = 0

        }
        document.querySelector("#twelve_slide >div:nth-child(" + i + ")>img").setAttribute("src", twelve_slide_img_arr[slide_12])
    }
})


let multi_1 = 0
let multi_slide_arr_1 = [
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
        name: "AIR KISS POWER LIPSTICK",
        price: "₹ 499",
        cart: "SELECT SHADE",
        link: "https://in.sugarcosmetics.com/products/air-kiss-powder-lipstick",
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
        name: "LIP ZIP MATE TOPPER",
        price: "₹ 499",
        cart: "ADD TO CART",
        link: "https://in.sugarcosmetics.com/products/lip-zip-matte-topper"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        name: "METTLE PRIMING BALM",
        price: "₹ 499",
        cart: "ADD TO CART",
        link: "https://in.sugarcosmetics.com/products/mettle-priming-balm"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        name: "SUNSCREEN",
        price: "₹ 499",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/bling-leader-illuminating-sunscreen-spf35-pa"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
        name: "SET THE TONE TINTED POWER",
        price: "₹ 699",
        cart: "SELECT SHADE",
        link: "https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
        name: "MATTE AS HELL CRAYON LIPSTICK",
        price: "₹ 799",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/matte-as-hell-crayon-lipstick"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
        name: "GOODESS OF FLAWLESS SPF30+ BB CREAM",
        price: "₹ 699",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/goddess-of-flawless-spf30-bb-cream"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
        name: "KOHL OF HONOUR",
        price: "₹ 249",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/kohl-of-honour-intense-kajal-1"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
        name: "BLEND THE RULES EYESHADOW",
        price: "₹ 1199",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/blend-the-rules-eyeshadow-palette"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
        name: "BASE OF GLORY PORE MINIMIZING PRIMER",
        price: "₹ 799",
        cart: "ADD TO CART "
        , link: "https://in.sugarcosmetics.com/products/base-of-glory-pore-minimizing-primer"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        name: "CONTOUR DE FORCE FACE PALETTE",
        price: "₹ 799",
        cart: "SELECT SHADE"
        , link: "https://in.sugarcosmetics.com/products/contour-de-force-face-palette"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        name: "ACE OF FACE FOUNDATION STICK",
        price: "₹ 999",
        cart: "SELECT SHADE"
        , link: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        name: "ALL SET TO GO BANANA POWDER",
        price: "₹ 599",

        cart: "ADD TO CART"
        , link: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
        name: "TIPSY LIPS MOISTURIZING BALM",
        price: "₹ 199",
        cart: "SELECT SHADE"
        , link: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412"
    }
]

document.querySelector("#second_slide_image>div:first-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_1--
        if (multi_1 < 0) {
            multi_1 = multi_slide_arr_1.length - 1
        }
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_1].image)
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_1].name
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_1].price
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_1].cart
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>div").addEventListener("click", function () {
            console.log("in")
        })


    }
})
document.querySelector("#second_slide_image>div:last-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_1++
        if (multi_1 > multi_slide_arr_1.length - 1) {
            multi_1 = 0
        }
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_1].image)
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_1].name
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_1].price
        document.querySelector("#second_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_1].cart



    }
})




document.querySelector("#seventh_image>div:first-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_2--
        if (multi_2 < 0) {
            multi_2 = multi_slide_arr_1.length - 1
        }
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_2].image)
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_2].name
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_2].price
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_2].cart



    }
})
document.querySelector("#seventh_image>div:last-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_2++
        if (multi_2 > multi_slide_arr_1.length - 1) {
            multi_2 = 0
        }
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_2].image)
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_2].name
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_2].price
        document.querySelector("#seventh_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_2].cart



    }
})


let multi_3 = 0

document.querySelector("#eight_image>div:first-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_3--
        if (multi_3 < 0) {
            multi_3 = multi_slide_arr_1.length - 1
        }
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_3].image)
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_3].name
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_3].price
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_3].cart



    }
})
document.querySelector("#eight_image>div:last-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_3++
        if (multi_3 > multi_slide_arr_1.length - 1) {
            multi_3 = 0
        }
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_3].image)
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_3].name
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_3].price
        document.querySelector("#eight_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_3].cart



    }
})

let multi_4 = 0

document.querySelector("#ninth_image>div:first-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_4--
        if (multi_4 < 0) {
            multi_4 = multi_slide_arr_1.length - 1
        }
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_4].image)
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_4].name
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_4].price
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_4].cart



    }
})
document.querySelector("#ninth_image>div:last-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_4++
        if (multi_4 > multi_slide_arr_1.length - 1) {
            multi_4 = 0
        }
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_4].image)
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_4].name
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_4].price
        document.querySelector("#ninth_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_4].cart
    }
})


let multi_5 = 0

document.querySelector("#eleventh_image>div:first-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_4--
        if (multi_4 < 0) {
            multi_4 = multi_slide_arr_1.length - 1
        }
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_4].image)
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_4].name
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_4].price
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_4].cart



    }
})
document.querySelector("#eleventh_image>div:last-child").addEventListener("click", function () {
    for (let i = 1; i < 5; i++) {
        multi_4++
        if (multi_4 > multi_slide_arr_1.length - 1) {
            multi_4 = 0
        }
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>img").setAttribute("src", multi_slide_arr_1[multi_4].image)
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>h5").innerText = multi_slide_arr_1[multi_4].name
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>p").innerText = multi_slide_arr_1[multi_4].price
        document.querySelector("#eleventh_slide_image_inner_div > div:nth-child(" + i + ")>div").innerText = multi_slide_arr_1[multi_4].cart
    }
})
