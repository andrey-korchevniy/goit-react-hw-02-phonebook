import React from "react";
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }

    handleInputChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.contactsName.map(el => el = el.name).includes(this.state.name)) {
             alert(`${this.state.name} is already in contacts`)
        }
        else {
            this.props.onSubmit(this.state.name, this.state.number);
            this.reset()
        }        
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const { name, number } = this.state;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="label" htmlFor='inputName'>Name</label>
                <input
                    className="input-name"
                    id='inputName'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleInputChange}
                    value={name}
                />
                <label className="label" htmlFor='inputTel'>Number</label>
                <input
                    className="input-name"
                    id='inputTel'
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}
                    value={number}
                />
                <button className="add-btn" type="submit" >Add Contact</button>
            </form>)
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;