import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() && number.trim()) {
      addContact(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Input"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
        required
      />
      <input
        className="Input"
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Enter phone number"
        required
      />
      <button className="Button" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
