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
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
