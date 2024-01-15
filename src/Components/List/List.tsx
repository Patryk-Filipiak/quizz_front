import React, { ReactNode, forwardRef, useMemo } from 'react';
import cn from 'classnames';
import './List.scss';

interface Props<T> {
    htmlTag?: string;
    className?:string;
    children?: React.ReactNode;
    items: T[] | null;
    loadingAsset?: ReactNode | string | null;
    emptyAsset?: ReactNode | string | null;
    component?: (item: T) => React.ReactNode;
    dir?: 'column' | 'row';
    container?: string;
  }
  
  export const List = forwardRef<HTMLUListElement, Props<any>>(
    ({ 
        children, 
        htmlTag = 'ul',
        className,
        container,
        loadingAsset=null,
        emptyAsset=null,
        items,
        component = (item: any) => <li>{item}</li>,
        dir = 'row'
    }, ref) => {
        const ListTag = htmlTag as keyof JSX.IntrinsicElements;
        const ContainerTag = container as keyof JSX.IntrinsicElements;
        const itemsMap:ReactNode[] = useMemo(() => items?.map((item, key) => (
            <React.Fragment key={key} >
                {component(item)}
            </React.Fragment>
        )) || [], [component, items]);

        return <ListTag
            className={cn('list', { 
                [className || '']: !!className,
                horizontal: dir === 'row',
            })}
        >
            {children}

            {!items && loadingAsset}

            {items?.length === 0 && emptyAsset}

            {container ? <ContainerTag
                className={cn(['list__container'], {
                    [className + '-container' || '']: !!className, 
                    horizontal: dir === 'row',
                })}
            >
                {itemsMap}   
            </ContainerTag> : itemsMap}
            
        </ListTag>
    }
  ); 
