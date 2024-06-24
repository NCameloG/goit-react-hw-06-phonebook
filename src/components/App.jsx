import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './ContactsSlice';
import { setFilter } from './FilterSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: `id-${Date.now()}`, name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
