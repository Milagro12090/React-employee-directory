//importing react
import React from "react";

//function gets called in app.js from line 129 
function Header() {
    return (
        //bootstrap nav for Titile
        <nav className="navbar navbar-light bg-light justify-content-center">
            <span className="navbar-brand mb-0 h1">
                Company Employee Directory
            </span>
        </nav>
    )
}
//export nav header
export default Header;