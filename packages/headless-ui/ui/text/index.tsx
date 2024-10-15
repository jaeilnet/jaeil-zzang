import React from "react";

import {ComponentPropsWithRef} from "react";

export interface TextProps extends ComponentPropsWithRef<"p"> {
    label: string;
}
export const Text = ({label, ...props}: TextProps) => {
    return <p {...props}>{label}</p>;
};
