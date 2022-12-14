function navbar(){
    return `<div id="navbar_container">
    <div id="logo">
        <a href="index.html">
        <img src="data:image/png;base64,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"

            alt="company logo" /></a>
        
    </div>
    <div id="menu1">
        <nav>
            <div class="wrapper">
                <ul class="nav-links">
                    <li>
                        <p>Features
                            <span class="fas fa-caret-down"></span>
                        </p>
                        <ul class="drop_menu1">
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Live Polling</a>
                            </li>
                            <li>
                                <a href="#">Word Cloud</a>
                            </li>
                            <li>
                                <a href="#">Quiz</a>
                            </li>
                            <li>
                                <a href="#">Q&A</a>
                            </li>
                            <li>
                                <a href="#">Survey</a>
                            </li>
                            <li>
                                <a href="#">Presentations</a>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <p>Solutions
                            <span class="fas fa-caret-down"></span>
                        </p>
                        <ul class="drop_menu1">
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Speakers</a>
                            </li>
                            <li>
                                <a href="#">Business</a>
                            </li>
                            <li>
                                <a href="#">Education</a>
                            </li>
                            <li>
                                <a href="#">Private events</a>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <p>Resources
                            <span class="fas fa-caret-down"></span>
                        </p>
                        <ul class="drop_menu1">
                            <li>
                                <a href="#">How to</a>
                            </li>
                            <li>
                                <a href="#">MentiAcademy</a>
                            </li>
                            <li>
                                <a href="#">Templates</a>
                            </li>
                            <li>
                                <a href="#">Webinars</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Integrations</a>
                            </li>
                            <li>
                                <a href="#">Help Center</a>
                            </li>
                        </ul>
                    </li>
    
                    <li>
                        <a href="#">Pricing</a>
                    </li>
    
                    <li>
                        <a href="#">Enterprise</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
    
    <div id="menu2">
        
            <p>
                <a href="signin.html" style="text-decoration: none" id="sgn">Sign In</a>
            </p>
            <p>
                <a href="signup.html">Sign Up</a>
            </p>
        
       
    </div>
</div>`
}
export default navbar ;