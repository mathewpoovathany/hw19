import React, { Component } from "react";
import Employee from './DataBody';

class EmployeesTable extends Component {

    renderEmployee = (employee, index) => {

        let displayed;

        if (employee.display === undefined) {
            displayed = true;
        } else {
            displayed = employee.display;
        }

        if (displayed === true) {
            return (
                <Employee 
                    key={index}
                    order={index + 1}
                    image={employee.image}
                    name={employee.name}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob}
                />
            );
        }

    }

    render(props) {
        
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col" className="clickable" title="Sort alphabetically" 
                            onClick={() => this.props.sortAlpha(this.props.employees)}>Name {this.props.sortArrow}</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.employees.map((employee, index) => (
                            this.renderEmployee(employee, index)
                        ))
                    }
                </tbody>
            </table>
        );
    }

}

export default EmployeesTable;
