class Myheader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
            <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color:#DAAE7D;">
            <a class="navbar-brand" href="Swashetna.html" style="color: #D41620;"><img src="Logo.jpeg" width="40" height="35" alt="Img" style="margin-top: -5px; margin-left: 5px;margin-right: 5px;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ml-auto">
                <li class="nav-item active">
                <a class="nav-link" href="AboutUs.html">About Us<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#Services">Our Services</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="Career.html">Career</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="Blog.html">Blogs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="Contact.html">Contact Us</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0 Search-btn" type="submit"><b>Search</b></button>
                </form>
            <button class="btn btn-outline my-2 my-sm-0 login-btn" type="submit" onclick="window.location.href = 'Login.html';"><b>Login</b></button>
            </div>
            </nav>`
    }
}

customElements.define('my_header',Myheader)