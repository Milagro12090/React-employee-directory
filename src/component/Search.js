//import react
import React from "react";

//search will be called in app.js at 130
function Search(props) {
    //searchfunction will b called in the same line
    const searchFunction = (event)=>{
        const fullName = event.target.value.trim().toLowerCase();//ignore uppercase
        if(event.keyCode===8){
            props.searchFunction(fullName)//searches through this data item
        }
        props.searchFunction(fullName);
    }
    return (
        //will return this html right under the header component
        <nav className="navbar navbar-light bg-light justify-content-center">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by Name" aria-label="Search" onKeyUp={searchFunction}/>
            </form>
        </nav>
    )
}

export default Search;