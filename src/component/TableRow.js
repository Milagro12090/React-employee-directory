//import react
import React from "react";

function TableRow(props) {
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

export default TableRow;