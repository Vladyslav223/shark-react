import React, { Component, Fragment } from 'react';

import PreLoader from  '../Preloader';
import './HomePage.scss';

const ApiFields = [
    'API',
    'Auth',
    'Category',
    'Cors',
    'Description',
    'HTTPS',
    'Link'
]

class HomePage extends Component {
  state = {
   }

  componentDidMount = () => {
    const {loadFacebookData, preLoader } = this.props;
    preLoader();
    loadFacebookData();  
  }  

  render () {
    return (
      <>
        <div className="home-page">
          {!this.props.isLoading 
            ? (
                <div className="api">
                  {ApiFields.map( field => (
                    <Fragment key={field}>
                      <p>{field}</p>
                      <p>{this.props.info[field]}</p>
                    </Fragment>
                  ))}                
                </div>              
              )
            : (<PreLoader />)
          }            
        </div>
    </>
    )
  }
}

export default HomePage;
