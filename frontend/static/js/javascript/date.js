
//Define date parameters 
function clock() {
    let date = new Date();



                                       
                                           
//Defines todays date in DOM
function date(){
    let todaysDate = new Date();

    console.log(todaysDate)
    document.getElementById("DATE").innerText = todaysDate.toDateString();
   };
   date();
}

