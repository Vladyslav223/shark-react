import React, { Component } from "react";

import Contact from "../Contact/Contact";
import PreLoader from "../Preloader";
import "./Contacts.scss";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.preLoader();
    this.props.loadContactsData();
  }

  render() {
    const { isLoading, contacts } = this.props;

    return isLoading ? (
      <div>
        <PreLoader />
      </div>
    ) : (
      <div>
        <div className="contacts-list">
          {contacts.map(contact => (
            <Contact key={contact.cell} contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
