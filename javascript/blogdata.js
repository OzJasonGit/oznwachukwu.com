









let blogData = {"The Darjeeling Limited": { description: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                            author: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                            date: 151,
                                            image_1_main: 7.2,
                                            text_1_main: 2007,
                                            video_youtube: 2007,
                                            text_2_body: 2007,
                                            image_3: 2007,
                                            text_3_conclusion: 2007,
                                            text_4_footer: 2007
                                          }
                };






//Store the object information inside a parameter.
    let blogTitle = `${Object.keys(blogData)[i]}`;
    let blogDescription = `${Object.values(blogData)[i].description}`;  
    let blogAuthor = `${Object.values(blogData)[i].author}`;
    let blogDate = `${Object.values(blogData)[i].date}`;                 
    let blogImage_1 = `${Object.values(blogData)[i].image_1_main}`;
    let blogText_1 = `${Object.values(blogData)[i].text_1_main}`;
    let blogVideo = `${Object.values(blogData)[i].video_youtube}`;
    let blogText_2 = `${Object.values(blogData)[i].text_2_body}`;                 
    let blogImage_3 = `${Object.values(blogData)[i].image_3}`;
    let blogText_3 = `${Object.values(blogData)[i].text_3_conclusion}`;
    let blogText_4 = `${Object.values(blogData)[i].text_4_footer}`;

















    //Add movie switch button. 
    let changeMovie = document.getElementById("BUTTON")

    //Create text elements rendered in the DOM
    document.getElementById("FILM-TITLE").innerText = movieTitle;
    document.getElementById("PLOT-DATA").innerText = moviePlot;
    document.getElementById("RATING-DATA").innerText = movieRating;
    document.getElementById("YEAR-DATA").innerText = movieYear;
    document.getElementById("CAST-DATA").innerText = movieCast;
    document.getElementById("RUNTIME-DATA").innerText = movieRuntime;