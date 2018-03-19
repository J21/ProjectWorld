import React from 'react';
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './NewsArticle.css';

function NewsArticle (props){
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
    <Button color = "info" href = {props.url} target = "_blank">Article</Button>
    <button onClick={() => props.handleClick(props._id)} className="btn btn-success">
    {props.buttonText}
    </button>
    </Card></Card>
    </div>
    );
}
export default NewsArticle;