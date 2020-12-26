// select all div with the class .box
let animated = document.querySelectorAll(".box");

// function to show div with the class .box
function showScroll(){

    // create a variable to sets the number of pixels that the element content is scrolled vertically.
    let scrollingTop = document.documentElement.scrollTop;
// Loops to each element (.box)
    for(let i = 0; i < animated.length; i++){
        let heightAnimation = animated[i].offsetTop;
        let intViewportWidth = window.innerWidth;
        //if condition, if meet condition(s) animation is triggered 
        if(heightAnimation - 550 < scrollingTop && i % 2 === 0 && intViewportWidth <= 767){
            animated[i].style.opacity = 1;
            animated[i].classList.add("showLeft");
        }
        if(heightAnimation - 550 < scrollingTop && i % 2 !== 0 && intViewportWidth <= 767){
            animated[i].style.opacity = 1;
            animated[i].classList.add("showRight");
        }
        if(heightAnimation - 550 < scrollingTop && intViewportWidth >= 768){
            animated[i].style.opacity = 1;
            animated[i].classList.add("showTop");
        }

    }
}
window.addEventListener('scroll', showScroll);