import cn from 'classnames'; 
import React, { ReactElement, ReactNode, useEffect, useMemo } from 'react';  
import { useSearchParams } from 'react-router-dom';

type DependsFunction = (node: ReactNode, dependencies?: boolean[]) => DependsFunction;

interface ContentType {
    Page: React.FC<{
        className?: string;
        children?: ReactNode;
    }>;
    Param: React.FC<{
        children?: ReactNode;
        selector: string;
    }>;
    Tab: React.FC<{
        children?: ReactNode;
        id: string;
    }>;
    Tabs: React.FC<{
        children?: ReactNode; 
        selected?: string;
    }>;
    depends: () => [DependsFunction, () => ReactNode[]];
}

export const Content:ContentType = {
    Page({ className, children }) {
        return (<main
            className={cn('content', {
                [className || '']: !!className,
            })}
        >
            { children }
        </main>);
    },

    Param({ children, selector }) {
        const [searchParams, setSearchParams] = useSearchParams();
        const selected = searchParams.get(selector); 
        useEffect(() => {
            const tabs = React.Children.toArray(children).map(child => (child as ReactElement).props.id);
            if (!tabs.includes(selected)) { 
                return setSearchParams(current => ({...current, [selector]: tabs[0]}))
            } 
        }, [selected, selector, setSearchParams, children]);

        return <>{React.Children.toArray(children).filter(child => (child as ReactElement).props.id === selected)}</>
    },

    Tabs({children, selected}) {
        const active:string = useMemo(() => {
            const tabs = React.Children.toArray(children).map(child => (child as ReactElement).props.id);
            if (!tabs.includes(selected)) { 
                return tabs[0];
            } 
            return selected;
        }, [selected, children]);

        return <>{React.Children.toArray(children).filter(child => (child as ReactElement).props.id === active)}</>
    },

    Tab({children}) {
        return <>{children}</>;
    },

    depends() {
        const display: ReactNode[] = [];
        const func = (node: ReactNode, dependencies: boolean[] = []) => {
            if (dependencies.every(dep => dep === true)) {
                display.push(node)
            }
            return func;
        }
        return [func, () => display.map((child, key) => <React.Fragment key={key} >{child}</React.Fragment>)]
    }
}