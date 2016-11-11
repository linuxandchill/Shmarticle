import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'; 
import {createArticle} from '../actions/index'; 

class NewArticle extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createArticle(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render(){
    const {fields:{title}, handleSubmit} = this.props; 

    return(
      <div className="container">

      <h1> Create a new article </h1> 

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'NewArticleForm',
  fields: ['title'] 
}, null, {createArticle})(NewArticle); 


