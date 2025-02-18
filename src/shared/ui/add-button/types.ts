import { ReactNode } from "react";

export interface IAddButton {
    children: string | ReactNode;
    onClick: () => void;
    buttonStyle?: string;
}