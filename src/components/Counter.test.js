import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should component renders initial value provided in props", () => {
    render(<Counter initialValue="test" />);
    const counterElement = screen.getByText(/test/i);
    expect(counterElement).toBeInTheDocument();
  });

  it('should click event on "decrement" button decrements the displayed value', () => {
    render(<Counter initialValue="0" />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    const value = screen.getByText("Value: -1");
    expect(value).toBeInTheDocument();
  });

  it('should click event on "increment" button decrements the displayed value', () => {
    render(<Counter initialValue={0} />);
    const decrementButton = screen.getByText("+");
    fireEvent.click(decrementButton);
    const value = screen.getByText("Value: 1");
    expect(value).toBeInTheDocument();
  });
});