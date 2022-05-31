import React from "react";
import PropTypes from 'prop-types';

function ContactElement({id,  name, number, onDeleteContact }) {
    return (
        <li>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>)
}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactElement;