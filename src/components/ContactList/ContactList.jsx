import React from "react";
import ContactElement from "components/ContactElement/ContactElement.jsx";
import PropTypes from 'prop-types';

function ContactList ({contacts, filter, onDeleteContact}) {
    return (
        <ul key='contactsList'>
            {contacts.map(contact => 
            ((contact.name.includes(filter) || contact.number.includes(filter)) &&
                <ContactElement
                key={contact.id}
                id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                />)
            )}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
}

export default ContactList;