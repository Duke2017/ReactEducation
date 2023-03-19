const GenreSelect = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="tab-bar">
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? 'active' : ''}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelect;