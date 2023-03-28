import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  const onChange = jest.fn();
  const mockValue = "testing";
  it("should component renders an input with the value equal to initial value passed in props", () => {
    render(<SearchForm value="preset value" />);
    const counterElement = screen.getByDisplayValue(/preset value/);
    expect(counterElement).toBeInTheDocument();
  });

  it('should after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    render(
      <SearchForm value={mockValue} callback={onChange} />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onChange).toHaveBeenCalledWith(mockValue);
  });

  it('should after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    render(
      <SearchForm value="" callback={onChange} />
    );
    const inputElement = screen.getByRole("textbox");
    act(() => userEvent.type(inputElement, 'test') );
    fireEvent.submit(inputElement);
    expect(onChange).toHaveBeenCalledWith('test');
  });
});