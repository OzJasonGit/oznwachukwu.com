//////////////////////////HOVER_IN-OUT/////////////////////////////////

const hoverPopup = document.getElementsByClassName('hover-popup');

let hover = false;
let opacity = 0;



hoverPopup.addEventListener('hover', function () {
    hover = !hover;

    if(hover){
        hoverPopup.style.opacity = '100';
        opacity += -100;
        hoverPopup.style.opacity = opacity + "%";
        

    } else {
        hoverPopup.style.opacity = '0';
        opacity -= -100;
        hoverPopup.style.opacity = opacity + "%";
    };
});

//////////////////////////HOVER_IN-OUT/////////////////////////////////