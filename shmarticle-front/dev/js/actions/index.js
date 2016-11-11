import {GET_ARTICLES, GET_ARTICLE, CREATE_ARTICLE, DELETE_ARTICLE} from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:5000/api/v1" ; 

export function getArticles(){
  const request = axios.get(`${API_URL}/articles`);
  return{
    type: GET_ARTICLES,
    payload: request
  };
}

export function createArticle(props){
  const request = axios.post(`${API_URL}/articles`, props);
  return{
    type: CREATE_ARTICLE,
    payload: request
  };
}

export function deleteArticle(id){
  const request = axios.delete(`${API_URL}/articles/${id}`);

  return{
    type: DELETE_ARTICLE,
    payload: request
  }; 
}

export function getArticle(id){
  const request = axios.get(`${API_URL}/articles/${id}`);

  return{
    type: GET_ARTICLE,
    payload: request
  }; 
}


