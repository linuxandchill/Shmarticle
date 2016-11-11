import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArticles} from '../actions/index'; 
import {Link} from 'react-router'; 

class ArticlesHome extends Component{
  componentWillMount(){
    this.props.getArticles();  
  } 

  renderArticles(){
    return this.props.articles.map((article) => {
      return (
        <li key={article.id}> 
          <Link to={"articles/" + article.id }>
            <h4> {article.title} </h4> 
          </Link> 
        </li> 
      )
    });
  }
  render(){
    return(
      <div className="container">

      <div>
      <Link to="articles/new" className="btn btn-warning">
      Create Article
      </Link> 
      </div>

      Articles Home Page
      <ul className="list-group">
      {this.renderArticles()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {articles: state.articles.all } 
}

export default connect(mapStateToProps, {getArticles: getArticles })(ArticlesHome); 
