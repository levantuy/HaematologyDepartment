import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

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

class GridPager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var li = [];
        var pageCount = this.props.Size;
        for (var i = 1; i <= pageCount; i++) {
            if (this.props.currentPage == i) {
                li.push(<PaginationItem key={i} active><PaginationLink href="#">{i}</PaginationLink></PaginationItem>);
            }
            else {
                li.push(<PaginationItem key={i} ><PaginationLink href="#" onClick={this.props.onPageChanged.bind(null, i)}>{i}</PaginationLink></PaginationItem>);
            }
        }
        li.slice(<PaginationItem key="0"><PaginationLink href="#">{"<<"}</PaginationLink></PaginationItem>, 0);
        li.push(<PaginationItem key="max"><PaginationLink href="#">{">>"}</PaginationLink></PaginationItem>);
        return (<Pagination className="pagination">{li}</Pagination>);
    }
};

class EmployeeGridRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.FirstName}</td>
                <td>{this.props.item.LastName}</td>
                <td>{this.props.item.EmailID}</td>
                <td>{this.props.item.Country}</td>
                <td>{this.props.item.City}</td>
            </tr>
        );
    }
};

class UserGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {
                List: [],
                totalPage: 0,
                sortColumnName: null,
                sortOrder: null,
                currentPage: 1,
                pageSize: 3,
                searchText: ''
            },
            dropdownOpen: new Array(6).fill(false),
        },
            this.toggle = this.toggle.bind(this),
            this.pageChanged = this.pageChanged.bind(this),
            this.sortChanged = this.sortChanged.bind(this),
            this.searchChange = this.searchChange.bind(this)
    }

    componentDidMount() {
        this.populateData();
    }

    // @* function for populate data *@
    populateData() {
        var params = {
            pageSize: this.state.Data.pageSize,
            currentPage: this.state.Data.currentPage,
            searchText: this.state.Data.searchText
        }
        if (this.state.Data.sortColumnName) {
            params.sortColumnName = this.state.Data.sortColumnName;
        }
        if (this.state.Data.sortOrder) {
            params.sortOrder = this.state.Data.sortOrder;
        }

        // Optionally the request above could also be done as
        axios.get('http://localhost:2239/home/getEmployeeList', {
            params: {
                //params
                pageSize: params.pageSize,
                currentPage: params.currentPage,
                sortOrder: params.sortOrder,
                sortColumnName: params.sortColumnName,
                searchText: params.searchText
            }
        })
            .then((response) => {
                this.setState({ Data: response.data });
            })
            .catch(function (error) {
                // console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    // @* function for pagination *@
    pageChanged(pageNumber, e) {
        e.preventDefault();
        this.state.Data.currentPage = pageNumber;
        this.populateData();
    }

    // @* function for sorting *@
    sortChanged(sortColumnName, order, e) {
        e.preventDefault();
        this.state.Data.sortColumnName = sortColumnName;
        this.state.Data.currentPage = 1;
        this.state.Data.sortOrder = order.toString().toLowerCase() == 'asc' ? 'desc' : 'asc';
        this.populateData();
    }

    searchChange(value1) {
        var d = this.state.Data;
        d.searchText = value1;
        this.setState({
            Data: d
        });
        this.populateData();
    }

    // @* function for set sort icon on table header *@
    _sortClass(filterName) {
        return "fa fa-fw " + ((filterName == this.state.Data.sortColumnName) ? ("fa-sort-" + this.state.Data.sortOrder) : "fa-sort");
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }

    render() {
        var rows = [];
        this.state.Data.List.forEach(function (item) {
            rows.push(<EmployeeGridRow key={item.EmployeeID} item={item} />);
        });

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader><i className="fa fa-align-justify"></i> Danh sách nhóm người dùng</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" lg="6" className="no-padding">
                                        <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                            this.toggle(0);
                                        }}>
                                            <DropdownToggle caret>5</DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>5</DropdownItem>
                                                <DropdownItem>10</DropdownItem>
                                                <DropdownItem>15</DropdownItem>
                                                <DropdownItem>Tất cả</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                    <Col xs="12" lg="6" className="no-padding">
                                        <SearchBox onSearchChanged={this.searchChange} searchText={this.state.Data.searchText} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Table hover bordered striped responsive size="sm">
                                        <thead>
                                            <tr>
                                                <th onClick={this.sortChanged.bind(this, 'FirstName', this.state.Data.sortOrder)}>First Name
                                    <i className={this._sortClass('FirstName')}></i></th>
                                                <th onClick={this.sortChanged.bind(this, 'LastName', this.state.Data.sortOrder)}>
                                                    Last Name
                                    <i className={this._sortClass('LastName')}></i></th>
                                                <th onClick={this.sortChanged.bind(this, 'EmailID', this.state.Data.sortOrder)}>
                                                    Email
                                    <i className={this._sortClass('EmailID')}></i>
                                                </th>
                                                <th onClick={this.sortChanged.bind(this, 'Country', this.state.Data.sortOrder)}>
                                                    Country
                                    <i className={this._sortClass('Country')}></i>
                                                </th>
                                                <th onClick={this.sortChanged.bind(this, 'City', this.state.Data.sortOrder)}>
                                                    City
                                    <i className={this._sortClass('City')}></i>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>{rows}</tbody>
                                    </Table>
                                </Row>
                                <GridPager Size={this.state.Data.totalPage} onPageChanged={this.pageChanged} currentPage={this.state.Data.currentPage} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserGroup;