/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

// ************************************************************ 1 **********************************************************

// test('renders learn react link', () => {
//   render(<App />);

//   // To access the virtual dom once it's been rendered, we can use "screen" gloabal object. getByText() method finds an element in
//   // the DOM based on whatever text it'd displaying. "/learn react/i" is the regex where 'i' means case insensitive.
//   // const linkElement = screen.getByText(/learn react/i);

//   // <a> has an inbuilt role "link".
//   const linkElement = screen.getByRole('link', {name: 'Learn React'});

//   // Jest assertions are what determine whether the test passes or fails. They starts with expect() method. toBeInTheDocument() method
//   // is the Jest matcher which might not have arguments.
//   expect(linkElement).toBeInTheDocument();
// });

// // Empty test will pass
// test('Empty test', () => {

// });

// // If thrown error, test will fail
// // test('Throw error', () => {
// //   throw new Error('test failed due to threw');
// // });

// ************************************************************ 1 **********************************************************

// ************************************************************ 2 **********************************************************

// test('Checking button', () => {
// 	render(<App />);

// 	// Find the element. If you have a sinlge button then providing second argument is optional.
// 	const colorButton = screen.getByRole('button', {name: /Change to blue/i});

// 	// Expect the bckgrnd color to be red
// 	expect(colorButton).toHaveStyle({backgroundColor: "red"});

// 	// click the button
// 	fireEvent.click(colorButton);

// 	// button turns blue when clicked. Remember that if any assertion (expect()) fails, remaining code will not run.
// 	expect(colorButton).toHaveStyle({backgroundColor: "blue"});
// 	expect(colorButton.textContent).toBe('Change to red');
// });

test("Initial conditions", () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked. As we have a single checkbox so second argument is optional
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

// test('Checkbox disables button on first click and enables on second click', () => {
// 	render(<App />);
// 	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
// 	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

// 	fireEvent.click(checkbox);
// 	expect(colorButton).toBeDisabled();

// 	fireEvent.click(checkbox);
// 	expect(colorButton).toBeEnabled();
// });

// ************************************************************ 2 **********************************************************

// ************************************************************ 3 **********************************************************

// test('Disabled button has gray background and reverts to red', () => {
// 	render(<App />);
// 	const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
// 	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

// 	// disable button
// 	fireEvent.click(checkbox);
// 	expect(colorButton).toHaveStyle('background-color: gray');

// 	// re-enable button
// 	fireEvent.click(checkbox);
// 	expect(colorButton).toHaveStyle('background-color: red');
// });

// test('Clicked disabled button has gray background and reverts to blue', () => {
// 	render(<App />);
// 	const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
// 	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

// 	// change button to blue
// 	fireEvent.click(colorButton);

// 	// disable button
// 	fireEvent.click(checkbox);
// 	expect(colorButton).toHaveStyle('background-color: gray');

// 	// re-enable button
// 	fireEvent.click(checkbox);
// 	expect(colorButton).toHaveStyle('background-color: blue');
// });

// ************************************************************ 3 **********************************************************

// ************************************************************ 4 **********************************************************

describe("spaces before camel-case capital letters", () => {
    test("Works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("Works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("Works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
            "Medium Violet Red"
        );
    });
});

// ************************************************************ 4 **********************************************************
