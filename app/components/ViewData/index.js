import React from 'react';
import BootstrapTableViewData from '../../components/BootstrapTable/BootstrapTableViewData.js'

/*
 * A cleaner way to import react-bootstrap components:
 */

import { Button, Well, Grid, Row, Col, Panel, PageHeader,
  Image, Tabs, Tab, Glyphicon, NavItem, Nav, Thumbnail } from 'react-bootstrap';

/*
 * These are the old imports, just to show what it looked like before. You can delete this.
 */
// import Button from 'react-bootstrap/lib/Button';
// import Well from 'react-bootstrap/lib/Well';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';
// import Panel from 'react-bootstrap/lib/Panel';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
// import Image from 'react-bootstrap/lib/Image';
// import Tabs from 'react-bootstrap/lib/Tabs';
// import Tab from 'react-bootstrap/lib/Tab';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import Nav from 'react-bootstrap/lib/Nav';
// import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/ViewDataPage/messages.js';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class ViewData extends React.Component{
  constructor()
  {
    super();
  }


  render()
  {
    /*
     * The data should be coming from outside the component. A component shouldn't contain it's own data--
     * it should just receive data and render it.
     *
     * For instance, in the ViewDataPage container, you have the <ViewData></ViewData> component added.
     *
     * Say that, in ViewDataPage's index.js, you define that const datasets = [...] just like below.
     *
     * You can pass that information to this component by saying <ViewData data={datasets}></ViewData>.
     *
     * That will pass the datasets object into the <ViewData> component's state.
     *
     * Then, in this component, you can access that datasets object via {this.props.data}.
     * This will let you access the datasets object that you originally defined in the outer container.
     *
     * And now, your component can take in all sorts of {datasets} objects and render them the same way every time!
     *
     * Actually I think you understand this already based on your BootstrapTable components. Anyway. Let me know
     * if any of that was confusing regardless.
     *
     * --Vy
     *
     */
    const datasets = [
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
    ];

    // Nice use of messages!
    const purposeMessage = (<FormattedMessage {...messages.purpose} />);
    const qualityMessage = (<FormattedMessage {...messages.quality} />);
    const referencesMessage = (<FormattedMessage {...messages.references} />);

    // Everything's pretty, but it's all static HTML for the most part.
    // We're going to want to make this render data dynamically for the next sprint.
    return (
      <Grid fluid="true">
        <Row>
          <Panel header="Wind Energy">
            <h3 title="purpose"> Purpose </h3>
            <p> {purposeMessage} </p>

            <h3> Data Quality </h3>
            <p> {qualityMessage} </p>

            <h3> References </h3>
            <p> {referencesMessage} </p>
            <Tabs>
            <Tab eventKey={1} title="Data">
            <br />
              <Col md={6}> <Panel header="Measurements">
                <Col md={12}><BootstrapTableViewData datasets = {datasets}/></Col>
              </Panel> </Col>
              <Col md={6}> <Panel header="Attachments">
                <ListGroup fill>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  </ListGroup>
              </Panel> </Col>


          </Tab>
            <Tab eventKey={2} title="Images">
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="191x190" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img2.jpg')} />
              </Col>
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
            </Tab>
            </Tabs>
        </Panel>
        </Row>
      </Grid>
    );
  }




}
