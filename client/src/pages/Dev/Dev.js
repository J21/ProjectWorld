import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
import './Dev.css'

export default class News extends Component {
    render () {
        return (
            <div>
        <Grid>
        <Row>                                               {/*   how to get links to diff pages */}
        <Col xs={6} md={4}>
        <img src={require("../../Components/Images/Steven.jpg")} alt="242x200"></img>
        <h3>Steven Aruba</h3>
        <h4>The front-end developer and Heroku master></h4>
        </Col>
        <Col xs={6} md={4}>
        <img src={require("../../Components/Images/Jose.jpg")} alt="242x200"></img>       
        <h3>Jose Ramos</h3>
        <h4>The front-end developer and researcher</h4>
        </Col>
        <Col xs={6} md={4}>
        <img src={require("../../Components/Images/Jonathan.png")} alt="242x200"></img>
        <h3>Jon Patiag</h3>
        <h4>The back-end developer and github master</h4>
        </Col>
        </Row>
        </Grid>
        </div>
        )
    }
}