import { ReactNode } from 'react';

export interface ITopListSectionProps<T> {
    title: string;
    loading: boolean;
    children: (data: T[]) => ReactNode;
    data: T[];
    viewAllLink: string;
}
