import React, { Component } from 'react'
import './News.css'
import Form  from "../../Components/Form";
import Weather from "../../Components/Weather";
import axios from "axios"
import NewsArticle from "../../Components/NewsArticle"
import API from "../../Utils/API.js"
export default class News extends Component {
  state={
    temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    articles:[],
    error:""
  }

   handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  getInfo= async (e)=> {
    e.preventDefault()
    console.log (e.target.elements)
    const city= e.target.city.value
    const  API_KEY = "dee84fb58b4bd91a81ff801a553a9e0c"
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    const data = await api_call.json();
    console.log(data)
    axios.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=4dc6306b9abc455aa66413c4ff6054d2`)
    // arrow function to resolve the promise, handle the response from the API
    .then(response =>{console.log(response.data)
      
      if (city){
        this.setState({
         temperature: data.main.temp,
         city: data.name,
         humidity:data.main.humidity,
         description:data.weather[0].description,
         articles:response.data.articles
       })
      } else {
        this.setState({
          temperature:undefined,
          city: undefined,
          humidity:undefined,
          description:undefined,
          articles: undefined,
          error : "please enter the value"  
        })
      }; 
    }
    )
    .catch(err => console.log(err));
  };

  render () {
    return (
      <div>
        {/* <div className = "wrapper">
         <div className= "container">
         <div className= "row">
         <div className=  "col-md-12">
         <Navbar brand='logo' right>
  <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
  <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
</Navbar>
       </div>
       </div>
       </div>
     </div> */}
     <div className ="wrapper">
     <div className ="main">
     <div className= "container">
     <div className = "row">
     <div className="form-container col-12">        
     <Form
     getInfo={this.getInfo}/>

     <div className="row">
     
     <div className="col-xs-3 weather-container">   

     
     <Weather
     temperature= {this.state.temperature}
     city= {this.state.city}
     humidity= {this.state.humidity}
     description= {this.state.description}
     error={this.state.error}
     /> 
     </div>
     <div className="col-xs-9">
     {this.state.articles.map(article =>(
       <NewsArticle
       id={article._id}
       author={article.author}
       description={article.description}
       publishedAt={article.publishedAt}
       key={article.publishedAt}
       source={article.source.name}
       title={article.title}
       url={article.url}
       urlToImage={article.urlToImage}
       handleClick={this.handleArticleSave}
       buttonText="Save Article"
       />

       ))}
       </div>
       </div>                     
       </div>
       </div>
       </div>
       </div>           
       </div>
       </div>
       

       



       );
     }
     
     
   }









