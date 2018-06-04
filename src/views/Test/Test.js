import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import PatientReport from '../Patient/Patient'
require("jquery/dist/jquery");


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };    
    this.toggleLarge = this.toggleLarge.bind(this);
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <Button onClick={this.toggleLarge} className="mr-1">Launch large modal</Button>
          </Col>
          <Col md="10"></Col>          
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bootstrap Modals
              </CardHeader>
              <CardBody>
                
                <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                       className={'modal-lg'}>
                  <ModalHeader toggle={this.toggleLarge}>Báo cáo bệnh nhân</ModalHeader>
                  <ModalBody>
                    <PatientReport></PatientReport>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                  </ModalFooter>
                </Modal>              

              </CardBody>
            </Card>
          </Col>
        </Row>      
      </div>
    );
  }
}

export default Test;
