





//////////////////////////MENU DROPDOWN/////////////////////////////////

const menuDropdown = document.getElementById('MENU-DROPDOWN');
const burger = document.getElementById('BURGER');


let clicked = false;
let left = 0;



burger.addEventListener('click', function () {
    clicked = !clicked;

    if(clicked){
        menuDropdown.style.background = 'magenta';
        left += -100;
        menuDropdown.style.left = left + "%";
        

    } else {
        menuDropdown.style.background = '#2E2E2E';
        left -= -100;
        menuDropdown.style.left = left + "%";
    };
});

//////////////////////////MENU DROPDOWN/////////////////////////////////





















