import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

function App() {
  var temporaryStyles = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "10rem",
  };
  let handleSearchChange = (searchFrase) => {
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
        <div style={temporaryStyles}>
          <Counter initialValue={0} />
          <SearchForm value="preset value" callback={handleSearchChange} />
          <GenreSelect genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        </div>
      </header>
    </div>
  );
}

export default App;
