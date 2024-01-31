import React from 'react';

type ListProps<T> = {
    items: T[];
    id?:string;
    className?: string;
    children: (item: T) => React.ReactNode;
};

export const List = <T,>({ items, className, children }: ListProps<T>): React.ReactElement => {
    return (<>{items.map((item, index) => (
        <React.Fragment key={index}>{children(item)}</React.Fragment>
    ))} </>);
};