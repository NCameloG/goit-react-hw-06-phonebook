import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="List">
      {contacts.map(contact => (
        <li className="List-contact" key={contact.id}>
          {contact.name}: {contact.number}
          <button className="Button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
