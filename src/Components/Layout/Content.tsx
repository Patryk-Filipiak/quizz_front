/* eslint-disable react-hooks/exhaustive-deps */
import cn from 'classnames'; 
import React, { ReactElement, ReactNode, useEffect, useMemo } from 'react';  
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ContentType } from './types';
import './Content.scss';



export const Content:ContentType = {
    Page({ className, children }) {
        return (<main
            className={cn(['App__content', 'content'], {
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
        }, [selected, children]);

        return <>{React.Children.toArray(children).filter(child => (child as ReactElement).props.id === selected)}</>
    },

    useParam() {
        const navigate = useNavigate();
        return (params) => {
            const searchParams = new URLSearchParams(window.location.search);
            Object.keys(params).forEach(key => searchParams.set(key, params[key]))
            navigate({
                pathname: window.location.pathname,
                search: searchParams.toString()
            });
        }
        
    },

    Tabs({children, selected}) {
        const active:string = useMemo(() => {
            const tabs = React.Children.toArray(children).map(child => (child as ReactElement).props.id);
            if (!tabs.includes(selected)) { 
                return tabs[0];
            } 
            return selected;
        }, [selected]);

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