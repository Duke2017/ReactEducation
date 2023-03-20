import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

const App = () => {
  const handleSearchChange = (searchFrase) => {
    console.log(searchFrase);
  };
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    console.log(`Selected genre: ${genre}`);
  };
  const [selectedGenre, setSelectedGenre] = useState('Action');

  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  return (
    <div className="App">
      <header className="App-header">
          <Counter initialValue={0} />
          <SearchForm value="preset value" callback={handleSearchChange} />
          <GenreSelect genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
      </header>
    </div>
  );
}

export default App;
