import React, { Component } from 'react';
import { Col, Button, Card, Row, Modal, ModalBody, ModalFooter, ModalHeader, CardHeader, CardBody } from 'reactstrap';
import PatientReport from '../Patient/Patient'
require("jquery/dist/jquery");


class Dashboard extends Component {
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
                       className={'modal-lg modal-customer'}>
                  <ModalHeader toggle={this.toggleLarge}>Báo cáo bệnh nhân</ModalHeader>
                  <ModalBody className="modal-customer">
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

export default Dashboard;
