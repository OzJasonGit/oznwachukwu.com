const scroll = document.getElementById("SCROLL-DIV");




function intervalScroll() {
    
    let up = 0
    setInterval(scroll, 5000)
    up += 100;
    scroll.style.up = "%"

}




function moveUp() {
  var myDiv = document.getElementById("SCROLL-DIV");
  var topPosition = parseInt(SCROLL-DIV.style.top);
  if (isNaN(topPosition)) {
    topPosition = 0;
  }
  topPosition -= 10;
  myDiv.style.top = topPosition + "px";
}

function moveDown() {
  var myDiv = document.getElementById("SCROLL-DIV");
  var topPosition = parseInt(SCROLL-DIV.style.top);
  if (isNaN(topPosition)) {
    topPosition = 0;
  }
  topPosition += 10;
  myDiv.style.top = topPosition + "px";
}


setInterval(moveUp, 7500, moveDown)