import API from "../../utils/API";
import React, { Component } from "react";
import Search from "../Search/index";
import Table from "../Table/index";
import "./container.css";

class Container extends Component {

    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    // get data to load page
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    // Sort by First Name
    sortByFirstName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)
            this.setState({
                filteredEmployees: sorteds,
                order: "desc"
            })
        } else {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)
            this.setState({
                filteredEmployees: sorteds,
                order: "asc"
            })
        }
    }

    //match while typing in search field
    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)
        this.setState({
            filteredEmployees,
        });
    };

    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Search
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} 
                />
                <Table results={this.state.filteredEmployees}
                    sortByFirstName={this.sortByFirstName}
                />
            </div >
        )
    }
}

export default Container