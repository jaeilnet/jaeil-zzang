import * as React from "react";

import {render, screen} from "@testing-library/react";
import {Button} from "..";

describe("Button", () => {
    it("should render correctly", () => {
        render(<Button label="button" />);

        const buttonEl = screen.getByRole("button", {name: /button/i});

        expect(buttonEl);
    });
});
