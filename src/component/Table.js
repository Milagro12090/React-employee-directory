//import react and import tablerow (I love how you can call another compnent within a compnent)
import React from "react";
import TableRow from "./TableRow";
//calling table component on 136 of app.js
function Table(props) {
    //sort table
    const sortTable = (event)=>{
        const header = event.target.textContent
        props.sort(header);
    } 
    return (
        //will return this html
        //<tr></tr> will create the tables and the data types and then the tableRow will return data in the rows 
        <table className="table table-light justify-content-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" onClick={sortTable}>Name</th>
                    <th scope="col" onClick={sortTable}>Email</th>
                    <th scope="col" onClick={sortTable}>Age</th>
                    <th scope="col" onClick={sortTable}>Phone</th>
                    <th scope="col" onClick={sortTable}>State</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(((employee) => {
                    return <TableRow key={employee.login.uuid} {...employee} />
                }))}
            </tbody>
        </table>
    )
}
//export table
export default Table;