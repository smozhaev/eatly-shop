import { ReactNode } from 'react';

export interface ICustomButton {
    onClickFunction: () => void;
    children: ReactNode;
    secondChildren?: ReactNode;
    buttonStyle?: string;
}
