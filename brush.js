let productData = [
    {
        pname: "SUGAR BLEND FACE BRUSH 003 CONTOUR",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
        ptag: "BLEND FACE BRUSH 003 CONTOUR",
        pid: "b1",
        price: "Rs.399",
        nprice: 399,
        pcateg: "Eyesshadow brush",
        prate: "⭐ 4.5(13)", quantity: 0
        , fill: "Brush",
    },
    {
        pname: "SUGAR BLEND FACE BRUSH 043 CONTOUR ROUND XL",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        ptag: "BLEND FACE BRUSH 043 CONTOUR ROUND XL",
        pid: "b2", quantity: 0,
        price: "Rs.399",
        nprice: 399,
        pcateg: "Foundation brush",
        prate: "⭐ 4.8(6)"
        , fill: "Brush",
    },
    {
        pname: "SUGAR BLEND FACE BRUSH 042 CONTOUR ROUND",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        ptag: "BLEND FACE BRUSH 042 CONTOUR ROUND",
        pid: "b3",
        price: "Rs.399", quantity: 0,
        nprice: 399,
        pcateg: "Eyesshadow brush",
        prate: "⭐ 4.4(5)"
        , fill: "Brush",
    },
    {
        pname: "EYE & FACE COMBO",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        ptag: "EYES & FACE COMBO",
        pid: "b4", quantity: 0,
        price: "Rs.649",
        nprice: 649,
        pcateg: "Eyesshadow brush",
        prate: "⭐ 4.5(6)"
        , fill: "Brush",
    },
    {
        pname: "SUGAR BLEND TREND FACE BRUSH 006 HIGHLIGHTER",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        ptag: "BLEND TREND FACE BRUSH -006 HIGHLIGHTER",
        pid: "b5", quantity: 0,
        price: "Rs.399",
        nprice: 399,
        pcateg: "Brush combo",
        prate: "⭐ 4.7(23)"
        , fill: "Brush",
    },
    {
        pname: "SUGAR BLEND TREND DUAL EYESHADOW BRUSH-413 FLAT+ROUND XL",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        ptag: "BLEND TREND DUAL EYESHADOW BRUSH-413 FLAT+ROUND XL",
        pid: "b6",
        nprice: 599,
        price: "Rs.599", quantity: 0,
        pcateg: "Foundation brush",
        prate: "⭐ 5(2)"
        , fill: "Brush",
    },
    {
        pname: " Blend Trend Eyeshadow Brush - 041 Flat",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        ptag: "Blend Trend Eyeshadow Brush - 041 Flat",
        pid: "b7",
        nprice: 399,
        price: "Rs.399", quantity: 0,
        pcateg: "Eyesshadow brush",
        prate: "⭐ 5(3)", fill: "Brush",

    },
    {
        pname: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        ptag: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        pid: "b8", quantity: 0,
        price: "Rs.599",
        nprice: 599,
        pcateg: "Eyesshadow brush",
        prate: "⭐ 5(2)", fill: "Brush",

    },

    {
        pname: " Blend Trend Foundation Brush - 052 Kabuki",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        ptag: "Blend Trend Foundation Brush - 052 Kabuki",
        pid: "b9",
        price: "Rs.399", quantity: 0,
        nprice: 399,
        pcateg: "Foundation brush",
        prate: "⭐ 4.8(26)", fill: "Brush",

    },
    {
        pname: " Blend Trend Face Brush - 001 Blush",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        ptag: "Blend Trend Face Brush - 001 Blush",
        pid: "b10",
        price: "Rs.399",
        nprice: 399,
        pcateg: "Face brush", quantity: 0,
        prate: "⭐ 4.9(15)", fill: "Brush",

    },
    {
        pname: "Blend Trend Face Brush - 007 Powder",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        ptag: "Blend Trend Face Brush - 007 Powder",
        pid: "b11", quantity: 0,
        price: "Rs.399",
        nprice: 399,
        pcateg: "Face brush",
        prate: "⭐ 4.9(24)", fill: "Brush",

    },
    {
        pname: " Face Essentials Combo",
        pimg: "https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
        ptag: "Face Essentials Combo",
        pid: "b12",
        price: "Rs.1499", quantity: 0,
        nprice: 1499,
        pcateg: "Face brush", fill: "Brush",
        prate: "⭐ 5(1)"

    },


]
let pdata = document.querySelector("#Product");
let filter = document.querySelector("#Filter");
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
        categ.innerText = elem.pcateg;
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

