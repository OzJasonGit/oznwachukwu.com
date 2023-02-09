import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Architecture");
    }

    async getHtml() {
        return `
             <!--------------------------------------------------------------------------------------------------------------------->
    
    
        

       
        
        
        <div class="wrapper">
            <div class="scroller">
                <!--------------------------------------------------------------------------------------------------------->



    <div class="wrapper">
        <div class="scroller">
            <!--------------------------------------------------------------------------------->

            

            <section class="center-holder">
                <div class="grid-0">
                    <div id="GRID-1">
            
                        <div id="IMAGE-MAIN" class="container">
                            <div id="IMAGE-MAIN-GRID" class="container"> 

                                <div id="IMAGE-MAIN-I" class="container"> 
                                    <div id="I-1" class="container">                                                     
                                    </div>
                                </div>

                                <div id="IMAGE-MAIN-T" class="container"> 
                                    <div id="T-1" class="container">

                                        <div id="T-2" class="container-2">
                                            <h2 id="TITLE"></h2>
                                        </div>
                                        <div id="T-3" class="container">
                                            <div id="T-3-LOCATION" class="container-2">
                                                <span id="LOCATION"></span>
                                            </div>

                                            <div id="T-3-DESCRIPTION" class="container-2">
                                                <span id="DESCRIPTION"></span>
                                            </div>
                                            <div id="T-3-STATUS" class="container-2">
                                                <span id="STATUS"></span>
                                            </div>
                                            <div id="T-3-COMPANY" class="container-2">
                                                <span id="COMPANY"></span>
                                            </div>

                                            <div id="T-3-SOFTWARE" class="container">
                                                
                                                
                                            </div>
                                                                              
                                            
                                        </div> 
                                              
                                    </div>
                                </div> 

                            </div>
                        </div>
            
                        <div id="IMAGE-1" class="container">
                            
                        </div>

                        <div id="IMAGE-2" class="container">
                            
                        </div>
            
                        <div id="IMAGE-3" class="container">
                            <div id="IMAGE-3-INTERNAL"></div>
                        </div>
            
                        <div id="TEXT" class="container">
                            <span>
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
                        </div>

                        <div id="IMAGE-4" class="container">
                        </div>



                        

                                            
                        
            
                    </div>
                </div>
            </section>




  
                <!--------------------------------------------------------------------------------------------------------->
                <section id="SHADOW-SECTION" class="center-holder">
        
                    <div class="footer-holder">
                        <footer id="FOOTER">
                            <div id="IPHONE" class="container">
                            </div>
                        </footer>
                    </div>
        
                </section>
        
        
            </div>
        </div>
        <link rel="stylesheet" href="../static/css/portfolio-architecture.css">
        `;
    }
}