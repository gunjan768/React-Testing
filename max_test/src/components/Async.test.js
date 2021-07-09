import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders posts if request succeeds", async () => {
        // jest.fn() will create a mock function
        window.fetch = jest.fn();

        // We have replaced the original fetch() method and result.json() by our own.
        window.fetch.mockResolvedValueOnce({
            // result.json() is replaced by below "json" property which has a function as a value
            json: async () => [
                { id: "p1", title: "First post" },
                { id: "p2", title: "Second post" },
            ],
        });

        render(<Async />);

        // const listItemElements = await screen.findAllByRole("listitem", {exact: false}, {timeout: 5000});
        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    });
});
