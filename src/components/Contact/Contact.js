import React from 'react';

import './Contact.scss';


const Contact = ({ contact }) => {

    return (

        <div className="contact">
            <img className="contact__img" src={contact.picture.medium} alt="contact" />
            <div className="contact__info">
                <p className="contact__registered">
                    {contact.registered.date.slice(0, 10)}
                </p>
                <p className="contact__name">
                    {contact.name.first + '' + contact.name.last}
                </p>

                <p className="contact__body">
                    {contact.location.city}
                </p>
                <p className="contact__email">
                    {contact.email}
                </p>
            </div>
        </div>
    );
};

Contact.propTypes = {

};

export default Contact;