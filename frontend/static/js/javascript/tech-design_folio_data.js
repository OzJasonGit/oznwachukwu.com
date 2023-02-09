let archFolioData = {"The Darjeeling Limited": { portfolio_title: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                            location: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                            description: 151,
                                            status: 7.2,
                                            company: 2007,
                                            software: 2007,
                                            image_main: 200000,
                                            image_1:2334,
                                            image_2: 2007,
                                            image_3: 2007,
                                            image_4: 2007,
                                          },
                    
                    "The Darjeeling Limited": { portfolio_title: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                            location: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                            description: 151,
                                            status: 7.2,
                                            company: 2007,
                                            software: 2007,
                                            image_main: 200000,
                                            image_1:2334,
                                            image_2: 2007,
                                            image_3: 2007,
                                            image_4: ,
                                          },                                          
                    };



//Create array to store the folio objects. 
let archFolioArr = [];


//push archFolioData objects into moviesArr.
archFolioArr.push(archFolioData["The Darjeeling Limited"])


console.log(archFolioArr) //Check to see if objects are pushed into moviesArr.


//Extract values from archFolioArr 
let archFolioProps = Object.values(archFolioArr)
console.log(archFolioProps); //Check if values were extracted. 


//loop through our array of objects. 
for (let i=0; i<archFolioProps.length; i+=1){
    console.log(archFolioProps[i])



//Store the object information inside a parameter.
    let folioTitle = `${Object.keys(archFolioData)[0]}`;
    let projectLocation = `${Object.values(archFolioData)[0].location}`;  
    let projectDescription = `${Object.values(archFolioData)[0].description}`;
    let projectStatus = `${Object.values(archFolioData)[0].status}`;                 
    let projectCompany = `${Object.values(archFolioData)[0].company}`;
    let projectSoftware = `${Object.values(archFolioData)[0].software}`;
    let projectImage_Main = `${Object.values(archFolioData)[0].image_main}`;
    let projectImage_1 = `${Object.values(archFolioData)[0].image_1}`;
    let projectImage_2 = `${Object.values(archFolioData)[0].image_2}`;                 
    let projectImage_3 = `${Object.values(archFolioData)[0].image_3}`;
    let projectImage_4 = `${Object.values(archFolioData)[0].image_4}`;
   



//Create text elements rendered in the DOM
    document.getElementById("TITLE").innerText = folioTitle;
    document.getElementById("LOCATION").innerText = projectLocation;
    document.getElementById("DESCRIPTION").innerText = projectDescription;
    document.getElementById("STATUS").innerText = projectStatus;
    document.getElementById("COMPANY").innerText = projectCompany;
    document.getElementById("SOFTWARE").innerText = projectSoftware;
    document.getElementById("IMAGE-MAIN").innerHTML = projectImage_Main;
    document.getElementById("IMAGE-1").innerText = projectImage_1;
    document.getElementById("IMAGE-2").innerText = projectImage_2;
    document.getElementById("IMAGE-3").innerText = projectImage_3;
    document.getElementById("IMAGE-4").innerText = projectImage_4;   
}
    
