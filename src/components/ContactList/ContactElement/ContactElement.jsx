import React from "react";
import PropTypes from 'prop-types';
import { Button } from "components/ContactForm/ContactForm.styled"

function ContactElement({id,  name, number, onDeleteContact }) {
    return (
        <li>
            {name}: {number}
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>)
}

ContactElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactElement;