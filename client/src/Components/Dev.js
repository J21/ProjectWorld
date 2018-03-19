import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import './Dev.css'

export default class News extends Component {
    render () {
        return (
            <div>
        <Grid>
        <Row>                                               {/*   how to get links to diff pages */}
        <Col xs={6} md={4}>
        <img src={require("./Images/Steven.jpg")} alt="242x200"></img>
        <h3>Steven Aruba</h3>
        <h4>The front-end developer and Heroku master></h4>
        </Col>
        <Col xs={6} md={4}>
        <img src={require("./Images/Jose.jpg")} alt="242x200"></img>       
        <h3>Jose Ramos</h3>
        <h4>The front-end developer and researcher</h4>
        </Col>
        <Col xs={6} md={4}>
        <img src={require("./Images/Jonathan.png")} alt="242x200"></img>
        <h3>Jon Patiag</h3>
        <h4>The back-end developer and github master</h4>
        </Col>
        </Row>
        </Grid>
        </div>
        )
    }
}