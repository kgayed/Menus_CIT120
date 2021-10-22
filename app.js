var pages=["Home","About","Interact","counter"];
function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);
    nav.style.backgroundColor = "red";
    
    document.body.appendChild(nav);
    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);

        });
        nav.appendChild(butt);
    }
}


function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "Home") {
        homePage()
    } else if(pg==="About") {
        aboutPage()
    }
    else {
        interactpage()
    }
}




    function homePage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Home Page";

        wrapper.appendChild(header);
    }

    function aboutPage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "About Page";
        var header2= document.createElement("h3")
        header2.innerHTML="Karin";
        wrapper.appendChild(header);
        wrapper.appendChild(header2);
    }

function interactpage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Interact";
        var counts=0;
        var count = document.createElement("button");
        var wrapper2 = document.createElement("div");
        wrapper2.classList.add("wrapper2");
        document.body.appendChild(wrapper2);
        function counter() {
          counts++;
        wrapper2.innerHTML = counts;
}
        count.addEventListener("click",function (){
            counter()
        });
        wrapper.appendChild(header);
        wrapper.appendChild(wrapper2)
        wrapper.appendChild(count);
    }
createNav();
createWrapper();
navigate("Home");