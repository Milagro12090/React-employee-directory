//importing react and react components 
import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";
import axios from "axios";
import "./style.css"
import { findAllByTestId } from "@testing-library/react";

let data;

//extend to react component and declares api data sets
class App extends React.Component {
  state = {
    loading: true,
    employeeList: {},
    filteredList: null,
    ascending: true
  }

  //async componentDidMount calls the api and calls employeelist and filtered list for data sets
  async componentDidMount() {
    let response = await axios({
      method: 'get',
      url: 'https://randomuser.me/api/?results=50',
      responseType: 'stream'
    })
    data = response.data.results;
    this.setState({
      loading: false,
      employeeList: response.data.results,
      filteredList: response.data.results
    })
  }
//this is going to be the search function once I add components 
  search = (str) => {
    const filteredList = this.state.employeeList.filter(employee => {
      const fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
      //returns whole list when page is first loaded
      return fullName.startsWith(str);
    })
    this.setState({ filteredList: filteredList });
  }
  //sort function for collumns can sort by name or email with this function
  sort = (header) => {

    if (header === 'Name') {
      //--------------------------------------
      if (this.state.ascending === true) {
        this.sortAscending(this.state.filteredList)
        this.setState({ ascending: false })
      }
      if (this.state.ascending === false) {
        this.sortDecending(this.state.filteredList)
        this.setState({ ascending: true })
      }
      //---------------------------------------
    } else if (header === 'Email') {
      if (this.state.ascending === true) {
        this.sortAscending(this.state.filteredList)
        this.setState({ ascending: false })
      }
      if (this.state.ascending === false) {
        this.sortDecending(this.state.filteredList)
        this.setState({ ascending: true })
      }
    } else if (header === 'Age') {

    } else if (header === "State") {

    }
  }
  //function for ascending sorting (ie: A-Z)
  sortAscending = (arr) => {
    arr.sort(function (a, b) {
      var nameA = (a.name.first + a.name.last).toUpperCase(); 
      var nameB = (b.name.first + b.name.last).toUpperCase(); 
      //if names are not similar from first letter remove from list
      if (nameA > nameB) {
        return -1;
      }
      //if names are similar stay on list
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ filteredList: arr })
  }
  //function for decending sorting (ie:Z-A)
  sortDecending = (arr) => {
    arr.sort(function (a, b) {
      var nameA = (a.name.first + a.name.last).toUpperCase(); 
      var nameB = (b.name.first + b.name.last).toUpperCase(); 
      //if names are not similar from first letter remove from list
      if (nameA > nameB) {
        return 1;
      }
      //if names are similar stay on list
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    this.setState({ filteredList: arr })
  }

  render() {
    //if a ta or grader could answear why we need this that would b cool. 
    if (this.state.loading) {
      return (
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    //what is displayed on load the components will rely on this to make searches and filter data (if im doing this right)
    return (
      <div className="App">
        <Header />
        <Search searchFunction={this.search} />
        <div className="card">
          <div className="card-body text-center">
            Click on the name or email column to sort the table by name or email.
          </div>
        </div>
        <Table employees={this.state.filteredList} sort={this.sort} />
      </div>
    );
  }
}

export default App;