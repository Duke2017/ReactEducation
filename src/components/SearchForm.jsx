import React, { useState } from "react";

const SearchForm = ({ callback, value }) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
