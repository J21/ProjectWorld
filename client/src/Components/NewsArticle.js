import React from 'react';
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const NewsArticle = props=>(
    
    <Card>
    {props.urlToImage && <CardImg style={{width: '100px', height: 'auto'}} className="img-responsive" src={ props.urlToImage} alt="pic" />}
<Card body>
    {console.log(props)}
    <p> { props.author} </p>
    <p> { props.description} </p>
    <p> { props.publishedAt} </p>
    <p> { props.title} </p>
    <p> <a href={ props.url} target="_blank">URL TO ARTICLE</a> </p>


     






</Card>
    </Card>








)

export default NewsArticle;