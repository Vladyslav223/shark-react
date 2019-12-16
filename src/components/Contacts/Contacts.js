import React, { Component } from 'react';

import Contact from '../Contact/Contact';
import PreLoader from  '../Preloader';
import './Contacts.scss';

class Contacts extends Component {
  state = {}

  componentDidMount = async() => {
    this.props.preLoader();
    this.props.loadContactsData();
  }

  render() {
    const { isLoading, contacts } = this.props;
    
    return (isLoading
      ? (<>
        <PreLoader />
      </>)
      : (<>
        <div className="contacts-list">
          {contacts.map(contact => (
              <Contact
                key={contact.cell}
                contact={contact}
              />
            )
          )}
        </div>
      </>));
  }
};

export default Contacts;
