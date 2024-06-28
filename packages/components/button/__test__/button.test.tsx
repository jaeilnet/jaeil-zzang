import * as React from "react";
import {Button} from "../src";
import {render, screen} from "@testing-library/react";

describe("Button", () => {
    it("should render correctly", () => {
        render(<Button label="button" />);

        const buttonEl = screen.getByRole("button", {name: /button/i});

        expect(buttonEl).toBeInTheDocument();
    });
});
