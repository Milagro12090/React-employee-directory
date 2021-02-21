import React from "react";
import TableRow from "./TableRow";

function Table(props) {
    const sortTable = (event)=>{
        const header = event.target.textContent
        props.sort(header);
    } 
    return (
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
                {/* {this.state.friends.map((friend) => <FriendCard key={friend.id} removeFriend={this.removeFriend} {...friend} />)} */}
                {props.employees.map(((employee) => {
                    return <TableRow key={employee.login.uuid} {...employee} />
                }))}
            </tbody>
        </table>
    )
}

export default Table;