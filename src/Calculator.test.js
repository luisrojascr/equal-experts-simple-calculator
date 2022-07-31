import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  test('should renders successfully"', () => {
    const { container } = render(<Calculator />);
    expect(container).toBeInTheDocument();
  });

  test("renders with a zero added to the equation", async () => {
    render(<Calculator />);
    const display = screen.getByTestId("display");
    expect(display.innerHTML).toBe("0");
  });

  test("adding a number to the initial equation removes the zero", () => {
    render(<Calculator />);
    const one = screen.getByTestId("number-1");
    const display = screen.getByTestId("display");
    fireEvent.click(one);
    expect(display.innerHTML).toBe("1");
  });

  test("can add each of the numbers to the equation", () => {
    render(<Calculator />);
    const one = screen.getByTestId("number-1");
    const two = screen.getByTestId("number-2");
    const three = screen.getByTestId("number-3");
    const four = screen.getByTestId("number-4");
    const five = screen.getByTestId("number-5");
    const six = screen.getByTestId("number-6");
    const seven = screen.getByTestId("number-7");
    const eight = screen.getByTestId("number-8");
    const nine = screen.getByTestId("number-9");
    const zero = screen.getByTestId("number-0");
    const display = screen.getByTestId("display");

    fireEvent.click(one);
    fireEvent.click(two);
    fireEvent.click(three);
    fireEvent.click(four);
    fireEvent.click(five);
    fireEvent.click(six);
    fireEvent.click(seven);
    fireEvent.click(eight);
    fireEvent.click(nine);
    fireEvent.click(zero);
    expect(display.innerHTML).toBe("1234567890");
  });

  test("can add a decimal to a value", () => {
    render(<Calculator />);
    const one = screen.getByTestId("number-1");
    const two = screen.getByTestId("number-2");
    const decimal = screen.getByTestId("button-decimal");
    const display = screen.getByTestId("display");

    fireEvent.click(one);
    fireEvent.click(decimal);
    fireEvent.click(two);
    expect(display.innerHTML).toBe("1.2");
  });

  test("can add numbers", () => {
    render(<Calculator />);
    const two = screen.getByTestId("number-2");
    const plus = screen.getByTestId("button-plus");
    const equals = screen.getByTestId("button-equals");
    const display = screen.getByTestId("display");

    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe("4");
  });

  test("can substract numbers", () => {
    render(<Calculator />);
    const three = screen.getByTestId("number-3");
    const one = screen.getByTestId("number-1");
    const minus = screen.getByTestId("button-minus");
    const equals = screen.getByTestId("button-equals");
    const display = screen.getByTestId("display");

    fireEvent.click(three);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe("2");
  });

  test("can multiply numbers", () => {
    render(<Calculator />);
    const three = screen.getByTestId("number-3");
    const multiply = screen.getByTestId("button-multiply");
    const equals = screen.getByTestId("button-equals");
    const display = screen.getByTestId("display");

    fireEvent.click(three);
    fireEvent.click(multiply);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe("9");
  });

  test("can divide numbers", () => {
    render(<Calculator />);
    const three = screen.getByTestId("number-3");
    const divide = screen.getByTestId("button-divide");
    const equals = screen.getByTestId("button-equals");
    const display = screen.getByTestId("display");

    fireEvent.click(three);
    fireEvent.click(divide);
    fireEvent.click(three);
    fireEvent.click(equals);
    expect(display.innerHTML).toBe("1");
  });

  test("can continue equation after submit", () => {
    render(<Calculator />);
    const two = screen.getByTestId("number-2");
    const divide = screen.getByTestId("button-divide");
    const plus = screen.getByTestId("button-plus");
    const display = screen.getByTestId("display");
    const equals = screen.getByTestId("button-equals");

    fireEvent.click(two);
    fireEvent.click(divide);
    fireEvent.click(two);
    fireEvent.click(equals);
    fireEvent.click(plus);
    fireEvent.click(two);
    expect(display.innerHTML).toBe("1+2");
  });

  test("can reset the calculator by clicking the CE button", () => {
    render(<Calculator />);
    const one = screen.getByTestId("number-1");
    const clear = screen.getByTestId("button-ce");
    const display = screen.getByTestId("display");

    fireEvent.click(one);
    fireEvent.click(one);
    fireEvent.click(clear);
    fireEvent.click(clear);
    expect(display.innerHTML).toBe("0");
  });
});
