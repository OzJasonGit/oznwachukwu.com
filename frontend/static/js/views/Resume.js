
import  AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Resume");
    }

    async getHtml() {
        return `

    <link rel="stylesheet" href="../static/css/resume.css">
    <link rel="stylesheet" href="../static/css/accordion.css">
    import  accordionEx from "./javascript/accordion.js";

    

    <div class="hidebar"></div>
   


    <div class="wrapper">
        <div class="scroller">
            <!--------------------------------------------------------------------------------->


            <section id="SHADOW-SECTION" class="center-holder">
                <div class="grid-0-2-top">
                    <div id="RESUME-TITLE">
                        <h1>RESUME</h1>
                    </div>
                </div>
            </section>
            
            
            <section class="center-holder">
            
                <div class="grid-0">
            
                    <section class="fixed">
                    </section>
            
                    <div id="GRID-1">
                     
                        <div class="title-holder-desktop">
                            <div class="three-holder">
            
                                <div id="HOME-RESUME">
                                    <a id="HOME-TAG" href=""></a>
                                </div>
            
            
                                <div id="HOME-TEXT" class="container">
                                    <span id="FRONT-TEXT" class="h1-title-text">oznwachukwu.com</span>
                                    <span id="HERO-TEXT" class="h2-hero-text">SOFTWARE ENGINEER | ARB RIBA ARCHITECT |
                                        DESIGNER | BIM ENGINEER</span>
                                    <span id="DESCRIPTION-TEXT" class="p-body-text">My work navigates the spaces between
                                        design, technology
                                        and engineering.
                                        My professional background is architecture, but my mind has always been
                                        exploratory.
                                        Eventually, it was always going to lead me to tech, where I continue to
                                        explore.</br>
                                        </br>
                                        I'm an experienced BIM Engineer with a keen focus on sustainability.</br>
            
                                    </span>
                                </div>
            
            
            
                                <div id="SOCIAL">

                                    <div id="GITHUB" class="icon">
                                        <a class = "icons-holder"
                                            href="https://github.com/OzJasonGit" target="_blank">
                                            <i class="fa-brands fa-github" id="GH" style="font-size: 1.5rem;", "margin-right: 0px" >
                                            </i>
                                        </a>
                                    </div>


                                    <div id="DRIBBLE" class="icon">
                                        <a class = "icons-holder"
                                            href="https://github.com/OzJasonGit" target="_blank">
                                            <i class="fa-brands fa-dribbble" id="DR"  style="font-size: 1.5rem;">
                                            </i>
                                        </a>
                                    </div>


                                    <div id="YOUTUBE" class="icon">
                                        <a class = "icons-holder" 
                                            href="https://github.com/OzJasonGit" target="_blank">
                                            <i class="fa-brands fa-youtube" id="YT" style="font-size: 1.5rem;">
                                            </i>
                                        </a>                     
                                    </div>


                                    <div id="LINKEDIN" class="icon">
                                        <a class = "icons-holder"
                                            href="https://www.linkedin.com/in/oz-nwachukwu-arb-riba-aa897121/" target="_blank">
                                            <i class="fa-brands fa-linkedin" id="LI"  style="font-size: 1.5rem;">
                                            </i>
                                        </a>
                                    </div>
                                    
                                </div>
            
                            </div>
                        </div>
            
            
                        <div id="ANIM" class="container">
            
                        </div>
            
            
            
            
                        <div id="IMAGE-MAIN" class="container">
            
                            <h3 id="EDUCATION-TITLE" class="p-body-text">
                                EDUCATION </br>
                                </br>
                            </h3>
            
            
                            <span id="EDUCATION-TEXT" class="p-body-text">
                                My work navigates the spaces between
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
                            </span>
            
            
                            <div id="BAR" class="container">
                            </div>
            
                        </div>
            
            
            
            
                        <div id="WORK-EXPERIENCE" class="container">
            
            
                            <div id="BAR" class="container">
                            </div>
            
                            <div id="BAR-2" class="container">
                            </div>
            
            
                            <h3 id="WORK-EXPERIENCE-TITLE" class="p-body-text">
                                WORK EXPERIENCE </br>
                                </br>
                            </h3>
            
            
                            <span id="DATE-TITLE-1" class="p-body-text">
                                2023 </br>
                                </br>
                            </span>
            
            
                            <div id="WORK-EX-ITEMS">
                                <div id="TEXT-GRID-1" class="container">
            
                                    <div id="TECH-1" class="cv-item">
                                        <span class="link">SOFTWARE ENGINEER</span>
                                        <li class="default open">
                                            <div class="link">
                                                </i>
                                                <div>
                                                    <span>TECHNICAL ARCHITECT / BIM (CONTRACT)</span>
                                                    <br>
                                                    <span>LW DESIGN GROUP _ AUG 2021 - APRIL 2022_ DUBAI, UAE</span>
                                                    <br>
                                                    <span>Interior and architectural design firm based in the Dubai, UAE</span>
                                                </div>
                                                <i class="fa fa-chevron-down"></i>
                                            </div>
                                            <ul class="submenu">
                                                <li><a>Photoshop</a></li>
                                                <li><a>Photoshop</a></li>
                                            </ul>
                                        </li>                                      
                                    </div>
            
                                    <div id="LW-DESIGN-GROUP" class="cv-item">
                                        <span>TECHNICAL ARCHITECT / BIM (CONTRACT)</span>
                                        <ul>
                                            <li>LW DESIGN GROUP _ AUG 2021 - APRIL 2022_ DUBAI, UAE</li>
                                            <li>Interior and architectural design firm based in the Dubai, UAE</li>
                                            <div>
                                            </div>
                                        </ul>                                        
                                    </div>
            
                                    <div id="TECH-2" class="cv-item">
                                        <span>SOFTWARE ENGINEER</span>
                                        <ul>
                                            <li>LW DESIGN GROUP _ AUG 2021 - APRIL 2022_ DUBAI, UAE</li>
                                            <li>Interior and architectural design firm based in the Dubai, UAE</li>
                                            <div>            
                                            </div>
                                        </ul>                                      
                                    </div>
            
                                    <div id="PERKINS-WILL" class="cv-item">
                                        <span>TECHNICAL ARCHITECT / BIM MANAGER</span>
                                        <ul>
                                            <li>PERKINS AND WILL _ NOV 2018 - JULY 2021 _ LONDON, UK</li>
                                            <li>A global, innovative, high-tech design firm focused on healthcare, commercial strategy, commercial interiors and sustainability.</li>
                                            <div>           
                                            </div>
                                        </ul>                                     
                                    </div>
            
                                    <div id="TECH-3" class="cv-item">
                                        <span>SOFTWARE ENGINEER</span>
                                        <ul>
                                            <li>LW DESIGN GROUP _ AUG 2021 - APRIL 2022_ DUBAI, UAE</li>
                                            <li>Interior and architectural design firm based in the Dubai, UAE</li>
                                            <div>          
                                            </div>
                                        </ul>                                      
                                    </div>
            
                                </div>
                            </div>
            
            
                            <span id="DATE-TITLE-2" class="p-body-text">
                                2019 </br>
                                </br>
                            </span>
            
            
            
                            <div id="ARROWS" class="container">
                                <div id="UP">
                                    <i class="fa-light fa-arrow-up-long">
                                    </i>
                                </div>
            
            
                                <div id="DOWN">
                                    <i class="fa-light fa-arrow-down-long">
                                    </i>
                                </div>
                            </div>
            
                        </div>
            
            
            
            
            
            
            
            
                        <div id="WORK-EXPERIENCE-2" class="container">
            
                            <div id="BAR-2" class="container">
                            </div>
            
            
            
            
            
                            <span id="DATE-TITLE-1" class="p-body-text">
                                2018 </br>
                                </br>
                            </span>
            
            
                            <div id="WORK-EX-ITEMS">
            
                                <div id="TEXT-GRID-2" class="container">
            
                                    <div id="BENOY" class="cv-item">
                                        <span>TECHNICAL ARCHITECT (PTIII)</span>
                                        <ul>
                                            <li>BENOY _ NOV 2016 - NOV 2018 _ LONDON, UK</li>
                                            <li>Interior and architectural design firm based in the Dubai, UAE</li>
                                            <div>            
                                            </div>
                                        </ul>                                        
                                    </div>
            
                                    <div id="CHAPMAN-TAYLOR" class="cv-item">
                                        <span>ARCHITECTURAL TECHNICIAN (PTII)</span>
                                        <ul>
                                            <li>CHAPMAN TAYLOR ARCHITECTS _ NOV 2015 - NOV 2016 _ LONDON, UK</li>
                                            <li>A global practice focused on high profile commercial initiatives.</li>
                                            <div>           
                                            </div>
                                        </ul>                                       
                                    </div>
            
                                    <div id="DAVID-MILLER" class="cv-item">
                                        <span>ARCHITECTURAL ASSISTANT (PTII)</span>
                                        <ul>
                                            <li>DAVID MILLER ARCHITECTS (DMA) _ NOV 2013 - NOV 2015 _ LONDON, UK</li>
                                            <li>A technical-led practice with a strong reputation for BIM focused solutions.</li>
                                            <div>           
                                            </div>
                                        </ul>                                      
                                    </div>
            
                                    <div id="ZAHA-HADID" class="cv-item">
                                        <span>ARCHITECTURAL ASSISTANT</span>
                                        <ul>
                                            <li>ZAHA HADID ARCHITECTS _ OCT 2010 - SEP 2011 _ LONDON, UK</li>
                                            <li>A global design practice known for progressive architecture</li>
                                            <div>            
                                            </div>
                                        </ul>                                      
                                    </div>
            
                                    <div id="ATKINS-DESIGN-STUDIO" class="cv-item">
                                        <span>ARCHITECTURAL ASSISTANT</span>
                                        <ul>
                                            <li>ATKINS DESIGN STUDIO _ AUG 2009 - SEP 2010 _ LONDON, UK</li>
                                            <li>A well-respected multidisciplinary engineering firm known for Crossrail</li>
                                            <div>           
                                            </div>
                                        </ul>                                       
                                    </div>
            
                                </div>
            
                            </div>
            
            
                            <span id="DATE-TITLE-2" class="p-body-text">
                                2009 </br>
                                </br>
                            </span>
            
            
            
                            <div id="ARROWS" class="container">
                                <div id="UP">
                                    <i class="fa-light fa-arrow-up-long">
                                    </i>
                                </div>
            
            
                                <div id="DOWN">
                                    <i class="fa-light fa-arrow-down-long">
                                    </i>
                                </div>
                            </div>
            
                        </div>
            
            
            
            
            
            
                        <div id="SKILLS-BOX" class="container">
            
                            <div id="CV-TITLE" class="container">
                            </div>
            
                            <div id="TECHNICAL-SKILLS-CORE-COMPETENCES" class="container">
                            </div>
            
                            <div id="LICENSES" class="container">
                            </div>
            
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
                            </div>
                        </footer>
                    </div>
        
            </section>

           

            

            
        `;
    }
}