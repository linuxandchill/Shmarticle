import {combineReducers} from 'redux';
import ArticlesReducer from './articles_reducer'; 
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
  articles: ArticlesReducer, 
  form: formReducer
});

export default allReducers
