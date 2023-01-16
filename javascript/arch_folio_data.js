







let archFolioData = {"The Darjeeling Limited": { portfolio_title: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                            location: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                            description: 151,
                                            status: 7.2,
                                            company: 2007,
                                            software: 2007,
                                            image_main: 2007,
                                            image_1:2334,
                                            image_2: 2007,
                                            image_3: 2007,
                                            image_4: 2007
                                          }
                    };






//Store the object information inside a parameter.
    let folioTitle = `${Object.keys(archFolioData)[i]}`;
    let projectLocation = `${Object.values(archFolioData)[i].location}`;  
    let projectDescription = `${Object.values(archFolioData)[i].description}`;
    let projectStatus = `${Object.values(archFolioData)[i].status}`;                 
    let projectCompany = `${Object.values(archFolioData)[i].company}`;
    let projectSoftware = `${Object.values(archFolioData)[i].software}`;
    let projectImage_Main = `${Object.values(archFolioData)[i].image_main}`;
    let projectImage_1 = `${Object.values(archFolioData)[i].image_1}`;
    let projectImage_2 = `${Object.values(archFolioData)[i].image_2}`;                 
    let projectImage_3 = `${Object.values(archFolioData)[i].image_3}`;
    let projectImage_4 = `${Object.values(archFolioData)[i].image_4}`;
   



//Create text elements rendered in the DOM
    document.getElementById("TITLE").innerText = folioTitle;
    document.getElementById("LOCATION").innerText = projectLocation;
    document.getElementById("DESCRIPTION").innerText = projectDescription;
    document.getElementById("STATUS").innerText = projectStatus;
    document.getElementById("COMPANY").innerText = projectCompany;
    document.getElementById("SOFTWARE").innerText = projectSoftware;
    document.getElementById("IMAGE-MAIN").innerText = projectImage_Main;
    document.getElementById("IMAGE-1").innerText = projectImage_1;
    document.getElementById("IMAGE-2").innerText = projectImage_2;
    document.getElementById("IMAGE-3").innerText = projectImage_3;
    document.getElementById("IMAGE-4").innerText = projectImage_4;
    




//Add movie switch button. 
    let changeMovie = document.getElementById("BUTTON")

    