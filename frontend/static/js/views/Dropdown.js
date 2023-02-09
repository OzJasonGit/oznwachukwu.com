
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <link rel="stylesheet" href="../static/css/portfolio-nav.css">

            <!----------DROPDOWN------------------->
    <div class="fixed-dropdown-holder">
    
        <div id="MENU-DROPDOWN">
            <div id="MENU">
                <div id="HOME" class="container-2">
                    <a href="..\frontend\blog-template.html"><span>STORIES</span></a>
                </div>               
                <div id="BLOG" class="container-2">
                    <a href="..\frontend\blog-template.html"><span>STORIES</span></a>
                </div>
                <div id="TECH" class="container-2">
                    <a href="..\frontend\portfolio-design-tech.html"><span>TECH</span></a>
                </div>
                <div id="ARCHITECTURE" class="container-2">
                    <a href="..\frontend\portfolio-architecture.html"><span>ARCHITECTURE</span></a>
                </div>
                <div id="RESUME" class="container-2">
                    <a href="..\frontend\resume.html"><span>RESUME</span></a>
                </div>
            </div>
        </div>
    
    </div>
    <!----------DROPDOWN------------------->
        
        `
    }

}





