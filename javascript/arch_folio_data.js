






















let archFolioData = {"The Darjeeling Limited": { portfolio_title: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
                                            location: [" Jason Schwartzman ", " Owen Wilson ", " Adrien Brody "],
                                            description: 151,
                                            status: 7.2,
                                            company: 2007,
                                            software: 2007,
                                            image_1_main: 2007,
                                            image_2: 2007,
                                            plan: 2007,
                                            image_4: 2007
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




//Create text elements rendered in the DOM
    document.getElementById("BLOG-TITLE").innerText = blogTitle;
    document.getElementById("DESCRIPTION").innerText = blogDescription;
    document.getElementById("AUTHOR").innerText = blogAuthor;
    document.getElementById("DATE").innerText = blogDate;
    document.getElementById("IMAGE-1-MAIN").innerText = blogImage_1;
    document.getElementById("TEXT-1-MAIN").innerText = blogText_1;
    document.getElementById("YT-VIDEO").innerText = blogVideo;
    document.getElementById("TEXT-2-BODY").innerText = blogText_2;
    document.getElementById("IMAGE-3").innerText = blogImage_3;
    document.getElementById("TEXT-3-CONCLUSION").innerText = blogText_3;
    document.getElementById("TEXT-4-FOOTER").innerText = blogText_4;

















    //Add movie switch button. 
    let changeMovie = document.getElementById("BUTTON")

    