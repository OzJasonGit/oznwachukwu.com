//Define clock parameters 
function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();


    

    //define 12 hour clock 
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
    

    //add second intervals to clock ticker 
    let time = `${hrs}:${mins}:${secs}`;
    setInterval(clock, 1000);


    //render clock in html 
    document.getElementById("CLOCK").innerText = time;
    }
    clock();

                                       
                                        
    
//Defines todays date in DOM
function date(){
    let todaysDate = new Date();

    console.log(todaysDate)

    document.getElementById("DATE").innerText = todaysDate.toDateString();
   }
   date();








