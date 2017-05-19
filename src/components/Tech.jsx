import _ from 'lodash';
import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsStore from '../stores/newsStore';
import '../../sass/styles.scss';

export default class Business extends React.Component {
  constructor (){
  super();
  this.state = {
      tech: []     
  };
  this.fetchTechArticles = this.fetchTechArticles.bind(this);   
  }

  componentWillMount(){
    newsActions.getTech();
    newsStore.on('tech_change',this.fetchTechArticles);
  }

  fetchTechArticles(){
    this.setState({ tech: newsStore.fetchTechArticles() });
  }

  render(){
    let techSplit = [];

    this.state.tech.map((tech, index) => {
      if(index < 4){
        techSplit.push(tech);
      }
    });

  
    return(
      <div className="single_left_coloum_wrapper single_cat_left">
        <h2 className="title">TECH NEWS</h2>
        { techSplit.map(function(techArticle){
        return( 
          <div className="single_cat_left_content floatleft">
            <h3>
              <a href={techArticle.url}>
                {techArticle.title}
              </a>
            </h3>
            <p>{techArticle.description}</p>
            <p className="single_cat_left_content_meta">by 
             <span> {techArticle.author}</span>
            </p>
          </div>
          );
        })
      }
      </div>
    );
 } 
 
}


