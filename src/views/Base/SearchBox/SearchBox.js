import React, { Component } from 'react';
import { Input } from 'reactstrap';

const WAIT_INTERVAL = 2000000000;
const ENTER_KEY = 13;
class SearchBox extends Component {
    constructor(props) {
        super(props);        
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.timer = null;
    }

    handleChange(e) {
        // console.log('search');
        clearTimeout(this.timer);
        this.timer = setTimeout(this.props.onSearchChanged(e.target.value), WAIT_INTERVAL);        
    }

    render() {
        return (
            <div><Input type="text" value={this.props.searchText} placeholder="tìm kiếm" onChange={this.handleChange} /></div>
        )
    }
};

export default SearchBox;