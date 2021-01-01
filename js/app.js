let controls = document.querySelectorAll(".controls");
let slideShow = document.querySelector(".slide-show");

let bgImages = [
    "url('images/slide-1.jpg')",
    "url('images/slide-2.jpg')",
    "url('images/slide-3.jpg')",
]; 

window.addEventListener('DOMContentLoaded', function(){
    slideShow.style.backgroundImage = bgImages[0];           
})

controls.forEach(function(control){
    control.addEventListener('click', function(){
        
        let leftControl = document.querySelector(".left");
        let middleControl = document.querySelector(".middle");
        let rightControl = document.querySelector(".right");

        if (control == leftControl) {
            slideShow.style.backgroundImage = bgImages[0];           
        } else if (control == middleControl) {
            slideShow.style.backgroundImage = bgImages[1];
        } else if (control == rightControl){
            slideShow.style.backgroundImage = bgImages[2];
        };
    })
})