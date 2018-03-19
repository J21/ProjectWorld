import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Login from './Login.js';
import './Home.css';

export default class Home extends Component {
    render () {
        return (
            <div>
                <Grid>
                    {/* <Jumbotron> */}
                        <h2>Welcome</h2>
                        <p>News and Weather from Cities around the Globe</p>
                {/* spinning globe */}
                <div className="circle">
                    <div class="globe"></div>
                    </div>
                    <br/>
                    <Button bsStyle="primary" href = "/Login">Sign In</Button>
                </Grid>
            </div>
        )
    }
}