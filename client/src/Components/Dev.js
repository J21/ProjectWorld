import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class News extends Component {
    render () {
        return (
            <div>
               <Grid>
  <Row>                                               {/*   how to get links to diff pages */}
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Steven Aruba</h3>
        <p>
        <Link to= "/#">
            <Button bsStyle="secondary">GitHub</Button>
        </Link>
        <Link to= "/#">
            <Button bsStyle="primary">LinkedIn</Button>
        </Link>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Jose Ramos</h3>
        <p>
        <Link to= "/">
            <Button bsStyle="secondary">GitHub</Button>
        </Link>
        <Link to="www.linkedin.com/in/jose-ramosmarquez
">
            <Button bsStyle="primary">LinkedIn</Button>
        </Link>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="/thumbnaildiv.png" alt="242x200">
        <h3>Jon Patiag</h3>
        <p>
        <Link to= "/#">
            <Button bsStyle="secondary">GitHub</Button>
        </Link>
        <Link to= "/#">
            <Button bsStyle="primary">LinkedIn</Button>
        </Link>
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
            </div>
        )
    }
}