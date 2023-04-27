import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
    <link rel="stylesheet" href="../static/css/index.css">
    import  accordionEx from "./javascript/accordion.js";

    

    

    <div class="hidebar"></div>
    <div class="wrapper-2">

        <!--------------------------------------------------------------------------------->
       


        <!----------------------------->
        <div class="fixed-center">
            <div class="grid-0-fixed">

                


                <div id="RIGHT-FIXED">
                    <div id="RIGHT-FIXED-STICKY">
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!--------------------------------------------------------------------------------->

    <div class="wrapper">
        <div class="scroller">

            <section id="SHADOW-SECTION" class="center-holder">
                <div class="grid-0-2-top">
                    <div id="HEAD-IMAGE">
                        <div id="HEAD-HERO">

                            <div id="MAIN-HERO-IMAGE" class="container">
                            </div> 

                            <div id="MAIN-HERO-IMAGE" class="container">
                            </div> 
                            <div id="MAIN-HERO-TEXT">
                                <div id="TEXT-ACTUAL">
                                    <div class = "container-2">
                                        <h3>Hi I'm,</h3>
                                    </div>
                                    <div class= "container-2">
                                        <h1 id=HERO-TITLE-TEXT>Oz<br/>Nwachukwu.</h1>                    
                                    </div>
                                    <div class = "container-2">
                                        <h3> I build things </br>inside and outside </br> of the web.</h3>
                                    </div>                                                                   
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </section>


            <section class="center-holder">

                <div class="grid-0">
                    <div id="GRID-1">

                        <div id = SUBTITLE-CONTAINER>
                            <div id="SUBTITLE" class = "container-2">
                                <h5>I'm a software engineer with a history as an architect, designer and BIM engineer. </br>
                                Today, I also use these skills (along with other ones) to kraft exceptional, human </br> 
                                centered digital experiences. </h5>
                            </div>
                        </div> 

                        

                        <div id="IMAGE" class="container">
                            <div id="hover-popup">
                                <div class="hover-popup_text"> 
                                    <div class="popup_content">
                                    </div>                              
                                </div>
                            </div>
                        </div>

                        <div id="IMAGE-2" class="container">
                            <div class="container-2">
                                <h1 id="HERO-TITLE-TEXT">Skills</h1>
                            </div>

                            <div id="SKILLS-CONTAINER" class="container-2">
                                <div class="container-absolute-scroll">
                                    <div id="SKILLS-SCROLL-DIV">  
                                        <div>
                                        </div>              
                                    </div>
                                </div>                               
                            </div>
                            
                        </div>

                        <div id="IMAGE-3" class="container">

                            <div id="hover-popup">
                                <div class="hover-popup_text">                               
                                </div>
                            </div>
                            <div id="IMAGE-3-INTERNAL"></div>
                        </div>

                        <div id="IMAGE-4" class="container">
                            <div id="hover-popup">
                                <div class="hover-popup_text">                               
                                </div>
                            </div>
                        </div>

                        <div class="title-holder-desktop">
                            <div class="three-holder">

                                <div id="HOME-ICON">
                                    <a id="HOME-TAG" href=""></a>
                                </div>



                                <div id="HOME-TEXT" class="container">
                                    <p id="FRONT-TEXT" class="h1-title-text">oznwachukwu.com</p>
                                    <p id="HERO-TEXT" class="h2-hero-text">SOFTWARE ENGINEER | ARB RIBA ARCHITECT |
                                        DESIGNER | BIM
                                        ENGINEER</p>
                                    <p id="DESCRIPTION-TEXT" class="p-body-text">My work navigates the spaces between
                                        design, technology
                                        and engineering.
                                        My professional background is architecture, but my mind has always been
                                        exploratory.
                                        Eventually, it was always going to lead me to tech, where I continue to
                                        explore.</br>
                                        </br>
                                        I'm an experienced BIM Engineer with a keen focus on sustainability.</br>
                                        </br>
                                        My career has largely been spent identifying wasteful or repetitive
                                        practices within design, construction and manufacturing.</br>
                                        </br>
                                        I always aim to apply strategic automations through technology.</br>
                                        </br>
                                        Let's meet at Starbucks for a coffee. I'm the guy with headphones on listening
                                        to Gangsta Rap.
                                    </p>
                                </div>



                                <div id="SOCIAL">
                                    <div id="GITHUB" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-github"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="DRIBBLE" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-dribbble"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="YOUTUBE" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-youtube"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="LINKEDIN" class="icon"><a
                                            href="https://www.linkedin.com/in/oz-nwachukwu-arb-riba-aa897121/"
                                            target="_blank"><i class="fa-brands fa-linkedin"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>




                        <div id="mobile">

                            <div id="HOME">
                                <a id="HOME-TAG" href=""></a>
                            </div>



                            <div id="HOME-TEXT" class="container">
                                <span id="FRONT-TEXT" class="h1-title-text">oznwachukwu.com</span>
                                <span id="HERO-TEXT" class="h2-hero-text">SOFTWARE ENGINEER | ARB RIBA ARCHITECT |
                                    DESIGNER | BIM
                                    ENGINEER</span>
                                <span id="DESCRIPTION-TEXT" class="p-body-text">My work navigates the spaces between
                                    design, technology and
                                    engineering.
                                    My professional background is architecture, but my mind has always been exploratory.
                                    Eventually, it was always going to lead me to tech, where I continue to
                                    explore.</br>
                                    </br>
                                    I'm an experienced BIM Engineer with a keen focus on sustainability.</br>
                                    </br>
                                    My career has largely been spent identifying wasteful or repetitive
                                    practices within design, construction and manufacturing.</br>
                                    </br>
                                    I always aim to apply strategic automations through technology.</br>
                                    </br>
                                    Let's meet at Starbucks for a coffee. I'm the guy with headphones on listening to
                                    Gangsta Rap.
                                </span>
                            </div>

                        </div>

                        <div id="TITLE-2" class="container">
                            
                            <div id="HERO" class="container">
                                <div id="hover-popup">
                                    <div class="hover-popup_text">                               
                                    </div>
                                </div> 
                                <div class="container-absolute-scroll"> 
                                    <div id="SCROLL-DIV">                                                        
                                    </div>
                                </div>
                            </div>

                            <div id="MID-IMAGE" class="container">

                                <div class="container">
                                    <div class="container-2">
                                        <span>Latest Stories</span>
                                    </div>

                                </div>

                                <div class="container">
                                    <div id="STORIES" class="container">
                                        <div id="hover-popup">
                                            <div class="hover-popup_text">                               
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id="BOTTOM-IMAGE" class="container">
                                <div id="hover-popup">
                                    <div class="hover-popup_text">                               
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>



            <section id="SHADOW-SECTION" class="center-holder">
                <div class="grid-0-2">
                    <div id="GRID-2">
                        <div id="VIDEO" class="container">
                        </div>

                        <div id="PFBD" class="container">
                            <div id="PLACEHOLDER" class="container">
                                <div id="hover-popup">
                                    <div class="hover-popup_text">                               
                                    </div>
                                </div>
                            </div>
                            <div id="TITLE-INSTA" class="container"></div>
                            <div id="INSTA" class="container"></div>
                        </div>

                        <div id="PFBD-2" class="container">
                            <div id="hover-popup">
                                <div class="hover-popup_text">                               
                                </div>
                            </div>
                        </div>

                        <div id="DESCRIPTION" class="container">
                        </div>
                    </div>
                </div>
            </section>


            <section id="SHADOW-SECTION" class="center-holder">
        
                    <div class="footer-holder">
                        <footer id="FOOTER">
                            <div id="IPHONE" class="container">
                            </div>
                            <div id="OTHER" class="container">
                                <div id="SOCIAL">
                                    <div id="GITHUB" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-github"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="DRIBBLE" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-dribbble"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="YOUTUBE" class="icon"><a href="https://github.com/OzJasonGit"
                                            target="_blank"><i class="fa-brands fa-youtube"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                    <div id="LINKEDIN" class="icon"><a
                                            href="https://www.linkedin.com/in/oz-nwachukwu-arb-riba-aa897121/"
                                            target="_blank"><i class="fa-brands fa-linkedin"
                                                style="font-size: 1.5rem; color: #efefef;"></i></a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
        
            </section>


        </div>
    </div>

    

        `;
    }
}