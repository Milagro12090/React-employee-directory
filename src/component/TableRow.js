//import react
import React from "react";
//this is called in the table component
function TableRow(props) {
    //function to call each of the data types and put an employee in each row
    return (
        <tr>
            <td>
            <img src={props.picture.thumbnail} alt="image of employee" className="img-thumbnail">
            
            </img>
            </td>
            <td>{props.name.first + " " + props.name.last}</td>
            <td>{props.email}</td>
            <td>{props.registered.age}</td>
            <td>{props.phone}</td>
            <td>{props.location.state}</td>
        </tr>
    )
}
//export table row
export default TableRow;