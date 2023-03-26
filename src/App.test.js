import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

describe("Counter", () => {
  it("Test that component renders initial value provided in props", () => {
    render(<Counter initialValue="test" />);
    const CounterElement = screen.getByText(/test/i);
    expect(CounterElement).toBeInTheDocument();
  });

  it('Test that a click event on "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue="0" />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    const value = screen.getByText("Value: -1");
    expect(value).toBeInTheDocument();
  });

  it('Test that a click event on "increment" button decrements the displayed value', () => {
    render(<Counter initialValue={0} />);
    const decrementButton = screen.getByText("+");
    fireEvent.click(decrementButton);
    const value = screen.getByText("Value: 1");
    expect(value).toBeInTheDocument();
  });
});

describe("SearchForm", () => {
  const onChange = jest.fn();
  const mockValue = "testing";
  it("Test that component renders an input with the value equal to initial value passed in props", () => {
    render(<SearchForm value="preset value" />);
    const CounterElement = screen.getByDisplayValue(/preset value/);
    expect(CounterElement).toBeInTheDocument();
  });

  it('Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(
      <SearchForm value={mockValue} callback={onChange} />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onChange).toHaveBeenCalledWith(mockValue);
  });

  it('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(
      <SearchForm value={mockValue} callback={onChange} />
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.submit(inputElement);
    expect(onChange).toHaveBeenCalledWith(mockValue);
  });
});

describe("GenreSelect", () => {
  const genres = ["first", "second", "third"];
  const onGenreChange = jest.fn();
  it("Test that component renders all genres passed in props", () => {
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

  it("Test that component highlights a selected genre passed in props", () => {
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

  it('Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
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
