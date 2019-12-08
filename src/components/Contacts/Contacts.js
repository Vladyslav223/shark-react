import React, { Component } from 'react';
import { HashRouter, Redirect } from 'react-router-dom';

import Contact from  '../Contact/Contact';

import './Contacts.scss';
const API_URL = 'https://randomuser.me/api/?page=1&results=10&seed=abc';

class Contacts extends Component {
    state = {
        contacts: [],        
        isLoading: true,
      }

    componentWillMount = async() => {    
        const response = await fetch(API_URL);
        const info = await response.json();
        this.setState({
          contacts: info.results,
          isLoading: false,
        });
      }

    render() {
        const { isLoading, contacts } = this.state;
        const userKey = JSON.parse(localStorage.getItem('userKey'));

        if (!userKey) {
            return (
              <HashRouter>
                <Redirect to="/autorise" />
              </HashRouter>
            ); 
          }

        return (isLoading
            ? (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
            : (
                <div className="contacts-list">
                    {contacts.map(contact => {
                        console.log('1111111111111111');
                        return (
                        <Contact handleRemovecontact={this.handleRemovecontact} key={contact.id} contact={contact} />
                    )})}
                </div>
            ));
    }
};


export default Contacts;


