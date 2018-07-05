import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('search');
        this.props.onSearchChanged(e.target.value);
    }

    render() {
        return (
            <div><Input type="text" value={this.props.searchText} placeholder="tìm kiếm" onChange={this.handleChange} /></div>
        )
    }
};

export default SearchBox;