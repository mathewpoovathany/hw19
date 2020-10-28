import React, { Component } from "react";

class Search extends Component  {

    render(props) {
        return (
            <div>
                <form id="search-form" className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="Search" className="sr-only">Search Names</label>
                        <input type="text" className="form-control" id="search-query" onChange={this.props.filterByName} placeholder="Search by name" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;