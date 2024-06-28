import React from "react";

import {ComponentPropsWithRef} from "react";

export interface ButtonPropss extends ComponentPropsWithRef<"button"> {
    label: string;
}
export const ButtonTwo = ({label, ...props}: ButtonPropss) => {
    return <button {...props}>{label}</button>;
};
