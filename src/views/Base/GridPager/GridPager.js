import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class GridPager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var li = [];
        var totalItem = this.props.Size;
        var pageCount = Math.floor(this.props.Size / this.props.pageSize);
        if (this.props.Size % this.props.pageSize > 0) pageCount++;
        for (var i = 1; i <= pageCount; i++) {
            if (this.props.currentPage == i) {
                li.push(<PaginationItem key={i} active><PaginationLink>{i}</PaginationLink></PaginationItem>);
            }
            else {
                li.push(<PaginationItem key={i} ><PaginationLink onClick={this.props.onPageChanged.bind(null, i)}>{i}</PaginationLink></PaginationItem>);
            }
        }
        li.splice(0, 0, <PaginationItem key="min"><PaginationLink href="#" onClick={this.props.onPageChanged.bind(null, 1)}>{"<<"}</PaginationLink></PaginationItem>);
        li.push(<PaginationItem key="max"><PaginationLink href="#" onClick={this.props.onPageChanged.bind(null, pageCount)}>{">>"}</PaginationLink></PaginationItem>);
        return (<Pagination className="pagination">{li}</Pagination>);
    }
};

export default GridPager;