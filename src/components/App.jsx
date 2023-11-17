import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactsWrapper, Title, Wrapper } from './GlobalStyle';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('Сontacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Сontacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const dublicateContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (dublicateContact) {
      alert(
        'Contact with this name already exists. Please enter a different name.'
      );
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm contacts={addContact} />
      <Title>Contacts</Title>
      <ContactsWrapper>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList contacts={filterContacts()} onDelete={deleteContact} />
      </ContactsWrapper>
    </Wrapper>
  );
};
