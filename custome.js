//thanks to w3school.com + css-trcik.com

//for sticky nav bar
var prevScrollpos = window.pageYOffset;
var navBar = document.getElementById("navBar");

var mobile = window.matchMedia("(max-width:800px)")

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(mobile.matches){
        if ((window.pageYOffset) == 0 ){
            navBar.style.padding = "2rem";
            navBar.style.background = "transparent";
        }
         else if (prevScrollpos > currentScrollPos){
            navBar.style.paddingTop = "1rem";
            navBar.style.paddingBottom = "1rem";
            navBar.style.backgroundColor = "#4bc9fc";
            navBar.style.top = "0";
        }
        else
        {
            navBar.style.top = "-100px";
            navBar.style.paddingTop = "0rem";
            navBar.style.paddingBottom = "0rem";
        }

    }
    else{

    if ((window.pageYOffset) == 0 ){
        navBar.style.padding = "4rem";
        navBar.style.background = "transparent";
    }
     else if (prevScrollpos > currentScrollPos){
        navBar.style.paddingTop = "1rem";
        navBar.style.paddingBottom = "1rem";
        navBar.style.backgroundColor = "#4bc9fc";
        navBar.style.top = "0";
    }
    else
    {
        navBar.style.top = "-100px";
        navBar.style.paddingTop = "0rem";
        navBar.style.paddingBottom = "0rem";
    }
    }

    prevScrollpos = currentScrollPos;
};




//for menu toggle bar
var hamBurger = document.getElementById("hamBurger-icon");
var menu = document.getElementById("menu");
//function listen to click event
hamBurger.addEventListener("click", () =>{

    //add "open" in class if not available. second click will be removing "open" from the class.
    hamBurger.classList.toggle("open");
    menu.classList.toggle("menu-active");
});






//thanks to css-trick
//for Scroll to top behaviour 
var scrollToTop = document.getElementById("backTotop");
var credits = document.getElementById("credit");
var rootElement = document.documentElement;

function handleScroll(){
    var scrollable = rootElement.scrollHeight - rootElement.clientHeight;

    if ((rootElement.scrollTop /  scrollable) > 0.60 ){
        scrollToTop.classList.add("enable");
        credits.classList.add("show");
    }
    else {
        scrollToTop.classList.remove("enable");
        credit.classList.remove("show");
    }
};

document.addEventListener("scroll", handleScroll);