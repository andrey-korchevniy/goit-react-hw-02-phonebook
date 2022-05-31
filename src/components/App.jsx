import React, { Component } from "react";
import "components/styles.css";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = (formName, formNumber) => {
        this.setState(prevState => ({
        contacts: [{ name: formName, id: nanoid(), number: formNumber }, ...prevState.contacts],
    }));
  }

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  }

  deleteContact = (contactId) => {
    this.setState(prevState => (
      {contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    ))
    
  }

  render() {
    const { contacts, filter, name, number } = this.state;
    console.log(this.state);
    return (
      <div>
        {/* <h1>Phonebook</h1> */}

        <ContactForm
          onSubmit={this.addContact}
          contactsName={this.state.contacts}
        />
 
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.handleInputChange}
        />
        
        <ContactList
          contacts={this.state.contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
        
      </div>
    )
  }
}

export default App;
