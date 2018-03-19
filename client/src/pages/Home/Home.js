import React, { Component } from 'react'
import { Grid} from 'react-bootstrap';
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
                </Grid>
            </div>
        )
    }
}