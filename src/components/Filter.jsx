import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <input
      className="Input"
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};

export default Filter;
