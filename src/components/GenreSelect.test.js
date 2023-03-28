import { render, screen, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

describe("GenreSelect", () => {
  const genres = ["first", "second", "third"];
  const onGenreChange = jest.fn();
  it("should component renders all genres passed in props", () => {
    render(
      <GenreSelect
        genres={genres}
        selectedGenre={"second"}
        onGenreChange={onGenreChange}
      />
    );
    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it("should component highlights a selected genre passed in props", () => {
    render(
      <GenreSelect
        genres={genres}
        selectedGenre={"second"}
        onGenreChange={onGenreChange}
      />
    );
    const selectedButton = screen.getByText("second");
    expect(selectedButton).toHaveClass("active");
  });

  it('should after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    render(
      <GenreSelect
        genres={genres}
        selectedGenre={"second"}
        onGenreChange={onGenreChange}
      />
    );
    const selectedButton = screen.getByText("third");
    fireEvent.click(selectedButton);
    expect(onGenreChange).toHaveBeenCalledWith("third");
  });
});
