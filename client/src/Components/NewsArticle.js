import React, {Component} from 'react';
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './NewsArticle.css';
import API from '../Utils/API.js';
import Save from './Save.js';

const NewsArticle = props=>{
    return(
        <div className = "article_info">
    <Card>
    <CardTitle> { props.title} </CardTitle>
    <CardSubtitle> { props.author} </CardSubtitle>
    {props.urlToImage && <CardImg style={{width: '100px', height: 'auto'}} className="img-responsive" src={ props.urlToImage} alt="pic" />}
    <Card>
    {console.log(props)}
    <CardText> { props.description} </CardText>
    <CardText> { props.publishedAt} </CardText>
    <Button color = "info" href = {props.url}  target="_blank">Article</Button>
    <Button color = "success" href = '/Save'>Save?</Button>
    </Card>
    </Card>
    </div>
    );
}
export default NewsArticle;