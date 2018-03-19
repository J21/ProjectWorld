import React, { Component } from "react";
import {Jumbotron, Panel, Col, Row, ListGroup} from "react-bootstrap";
import API from "../../Utils/API.js";
import Footer from "../../Components/Footer"
import NewsArticle from "../../Components/NewsArticle"
class Save extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSavedArticles()
    .then(res =>
      this.setState({
        articles: res.data
      })
      )
    .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id).then(res => this.getSavedArticles());
  };

  render() {
    return (
      <div>
      <Row>
      <Col size="md-12">
      <Jumbotron>
      <h1 className="text-center">
      <strong>Saved Articles</strong>
      </h1>
      <h2 className="text-center">
      Search for and save articles of interest.
      </h2>
      </Jumbotron>
      </Col>
      </Row>
      <Row>
      <Col size="md-12">
      <Panel title="Saved Articles" icon="download">
      {this.state.articles.length ? (
        <ListGroup>
        {this.state.articles.map(article => (
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
          handleClick={this.handleArticleDelete}
          buttonText="Delete Article"
          />
          ))}
        </ListGroup>
        ) : (
        <h2 className="text-center">No Saved Articles</h2>
        )}
        </Panel>
        </Col>
        </Row>
        <Footer />
        </div>
        );
      }
    }

    export default Save;