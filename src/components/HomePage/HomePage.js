import React, { Component } from 'react';
import { HashRouter, Redirect } from 'react-router-dom';

import './HomePage.scss';

const API_URL = 'https://api.publicapis.org/random';
class HomePage extends Component {
  state = {
    info: {
        entries: [
            {
                API: '',
                Auth: '',
                Category: '',
                Cors: '',
                Description: '',
                HTTPS: '',
                Link: '',
            }
        ],
    },
    isLoading: true,
  }

  componentWillMount = async() => {    
      const response = await fetch(API_URL);
      const info = await response.json();
      const userKey =  localStorage.getItem('userKey');      
      
      this.setState({
        info,
        isLoading: false,
        userKeyFlag: !!userKey,
      });
    }  

  render () {
      const {
        API,
        Auth,
        Category,
        Cors,
        Description,
        HTTPS,
        Link
    } = this.state.info.entries[0];

    const userKey = JSON.parse(localStorage.getItem('userKey'));

        if (!userKey) {
            return (
              <HashRouter>
                <Redirect to="/autorise" />
              </HashRouter>
            ); 
          }

      return (
        <div className="home-page">
            {!this.state.isLoading 
              ? (
                //<div className="home-page__wrap">
                  <div className="api">
                    <p>{`API:`}</p><p>{API}</p>
                    <p>{`Auth:`}</p><p>{Auth}</p>
                    <p>{`Category:`}</p><p>{Category}</p>
                    <p>{`Cors:`}</p><p>{Cors}</p>
                    <p>{`Description:`}</p><p>{Description}</p>
                    <p>{`HTTPS:`}</p><p>{HTTPS}</p>
                    <p>{`Link:`}</p><p>{Link}</p>
                  </div>
                //</div>
                
                )
              : (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
            }
            
        </div>
      )
  }
}

export default HomePage;
