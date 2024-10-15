import * as React from "react";

import {render, screen} from "@testing-library/react";
import {Text} from "..";

describe("Text", () => {
    it("should render correctly", () => {
        render(<Text label="button" />);

        const text = screen.getByText("button");

        expect(text);
    });
});
