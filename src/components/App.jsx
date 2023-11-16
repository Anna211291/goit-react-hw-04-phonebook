import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactsWrapper, Title, Wrapper } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('Contacts')
    if(savedContacts !== null) {
this.setState({
  contacts: JSON.parse(savedContacts)
})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('Contacts', JSON.stringify(this.state.contacts) 
      )
    }
  }
  addContact = newContact => {
    const { contacts } = this.state;
    const dublicateContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (dublicateContact) {
      alert(
        'Contact with this name already exists. Please enter a different name.'
      );
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };
  changeFilter = value => {
    this.setState({
      filter: value,
    });
  };
  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const contacts = this.filterContact();
    const filter = this.state.filter;
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm contacts={this.addContact} />
        <Title>Contacts</Title>
        <ContactsWrapper>
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList contacts={contacts} onDelete={this.deleteContact} />
        </ContactsWrapper>
      </Wrapper>
    );
  }
}
