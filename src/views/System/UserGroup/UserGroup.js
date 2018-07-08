import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Select from 'react-select';
import {GridPager, SearchBox} from '../../Base';
// import config from 'react-global-configuration';
import {getToken} from '../../../helpers';

class UserGroupComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.GroupId}</td>
                <td>{this.props.item.GroupName}</td>
                <td>{this.props.item.Description}</td>
                <td>{this.props.item.ParentId}</td>
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
                totalItem: 0,
                sortColumnName: '',
                sortOrder: '',
                currentPage: 1,
                pageSize: 3,
                searchText: ''
            },
            selectedOption: { value: '3', label: 'Hiện thị 3 bản ghi mỗi trang' },
        },
            this.selectionChange = this.selectionChange.bind(this),
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

        getToken();
        // Optionally the request above could also be done as
        axios.get(localStorage.getItem('urlApi') + 'UserApi/GetAll', {
            params: {
                pageSize: params.pageSize,
                currentPage: params.currentPage,
                sortOrder: params.sortOrder,
                sortColumnName: params.sortColumnName,
                searchText: params.searchText
            },
            headers: {
                "Authorization" : 'Bearer ' + localStorage.getItem('token')
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

    selectionChange = (selectedOption) => {
        this.setState({ selectedOption });
        var d = this.state.Data;
        d.currentPage = 1;
        d.pageSize = selectedOption.value;
        this.setState({
            Data: d
        });
        this.populateData();
      }


    render() {
        var rows = [];
        this.state.Data.List.forEach(function (item) {
            rows.push(<UserGroupComponent key={item.GroupId} item={item} />);
        });

        var options = [
            { value: '3', label: 'Hiện thị 3 bản ghi mỗi trang' },
            { value: '50', label: 'Hiện thị 50 bản ghi mỗi trang' },
            { value: '999', label: 'Tất cả' }
        ];

        const { selectedOption } = this.state;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader><i className="fa fa-align-justify"></i> Danh sách nhóm người dùng</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" lg="1" className="no-padding-right">
                                        <Button block color="primary">Thêm mới</Button>
                                    </Col>                                   
                                    <Col xs="12" lg="11" className="no-padding">
                                        <SearchBox onSearchChanged={this.searchChange} searchText={this.state.Data.searchText == null ? '' : this.state.Data.searchText} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Table hover bordered striped responsive size="sm">
                                        <thead>
                                            <tr>
                                                <th onClick={this.sortChanged.bind(this, 'GroupId', this.state.Data.sortOrder)}>Id nhóm
                                    <i className={this._sortClass('GroupId')}></i></th>
                                                <th onClick={this.sortChanged.bind(this, 'GroupName', this.state.Data.sortOrder)}>Tên nhóm
                                    <i className={this._sortClass('GroupName')}></i></th>
                                                <th onClick={this.sortChanged.bind(this, 'Description', this.state.Data.sortOrder)}>Mô tả nhóm
                                    <i className={this._sortClass('Description')}></i></th>
                                                <th onClick={this.sortChanged.bind(this, 'ParentId', this.state.Data.sortOrder)}>Id nhóm cha
                                    <i className={this._sortClass('ParentId')}></i>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>{rows}</tbody>
                                    </Table>
                                </Row>
                                <Row>
                                    <Col xs="12" lg="6" className="no-padding">
                                        <GridPager Size={this.state.Data.totalItem} pageSize = {this.state.Data.pageSize} onPageChanged={this.pageChanged} currentPage={this.state.Data.currentPage} />
                                    </Col>
                                    <Col xs="12" lg="6" className="no-padding">
                                        <Select
                                            name="form-field-name"
                                            value={this.state.selectedOption}
                                            options={options}
                                            onChange={this.selectionChange}
                                        />
                                    </Col>
                                </Row>                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserGroup;