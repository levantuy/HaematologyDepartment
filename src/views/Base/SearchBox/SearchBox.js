import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { DelayInput } from 'react-delay-input';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handChange.bind(this);
    }

    handChange(event) {
        this.setState({ value: this.props.searchText });
        this.props.onSearchChanged(event.target.value);
    }

    render() {
        return (
            <div>
                <DelayInput className="form-control"
                    minLength={2}
                    delayTimeout={800}
                    placeholder="tìm kiếm"
                    onChange={this.handChange} />
            </div>
        )
    }
};

export default SearchBox;