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
                 <h1>Login form</h1>
                 {/* </Jumbotron> */}
                <div className="login">
                <form>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>
                    <Button bsStyle="primary" href = "/news">Login</Button>                  
                    </div>
                </form>
                </div>
                </Grid>
            </div>
        )
    }
}