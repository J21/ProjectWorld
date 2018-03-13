import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render () {
        return (
            <div>
                <Grid>
                    {/* <Jumbotron> */}
                        <h2>What's Up World CHNAGE</h2>
                        <p>News and Weather from Cities around the Globe</p>
                    {/* </Jumbotron> */}

                {/* spinning globe */}
                <div className="circle">
                    <div class="globe"></div>
                    </div>

                    <br/>
                    <Link to= "/#">
                    <Button bsStyle="primary">Sign In</Button>
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    <Link to= "/#">
                    <Button bsStyle="secondary">Sign Up</Button>
                    </Link>
                </Grid>
            </div>
        )
    }
}