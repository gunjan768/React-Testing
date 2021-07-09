import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

// COMMAND:
// get(): expect element to be in DOM
// queryByText(): expect element not to be in DOM
// find(): expect element to appear async

// [ALL]
// . (exclude) expect only one match
// . (include) expect more than one match

// QueryType
// . Role (most preferred)    . AltText (images)    . Text (display elements)
// -> Form elements: PlaceholderText, LabelText, DisplayValue

test("Initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", {
        name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
        name: /confirm order/i,
    });

    // It is more advisable to use "userEvent" than "fireEvent"
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
    render(<SummaryForm />);

    // popover starts out hidden. queryByText() will not throw an error if nothing is found.
    const nullPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    // popover appears upon mouseover of checkbox label. getByText() throw an error if nothing found so there is no benefit of
    // writing "expect(popover).toBeInTheDocument();" as it will never reach it if error is found. But it's good practice to
    // write what we want to test.
    const popover = screen.getByText(
        /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);

    // Disappearance of our popover was happening asynchronously so it was happening after the test function had completed.
    // After adding waitForElementToBeRemoved() method, there is no need to write expect(nullPopover).not.toBeInTheDocument()
    // as waitForElementToBeRemoved() it will only do it.
    await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
    );
});
