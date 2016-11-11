import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ArticlesHome from './components/ArticlesHome';
import NewArticle from './components/NewArticle';
import SingleArticleShow from './components/SingleArticleShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ArticlesHome} /> 
    <Route path="articles/new" component={NewArticle} />
    <Route path="articles/:id" component={SingleArticleShow} />
  </Route>
); 
