import React, { Component } from 'react'
import './News.css'

export default class News extends Component {
    render () {
        return (
            <div className="container" id="nav" style="background-color: grey;">
  <div className="topnav" id="myTopnav" style="font-size: 20px; background-color: red; color: red; float:right; opacity:0.6">
      <a href="/first.html" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" style="font-size:15px;" className="icon" onclick="myFunction()">&#9776;</a>
    </div>
</div>
        )
    }
}