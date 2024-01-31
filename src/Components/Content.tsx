/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, createElement, isValidElement, useEffect } from "react";
import { Children, ReactNode } from "react";  
import { useNavigate, useSearchParams } from "react-router-dom";

export const Content: React.FC<{
    param?: string;
    depends?: boolean[];
    selected?: string;
    id?: string;
    children?: ReactNode | ReactNode[]; 
    Else?: boolean;
    tag?: string
    className?: string;
}> = ({ param, depends, selected, children, tag, className }) => { 
    const [searchParams] = useSearchParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        if(param) {
            const tabs = React.Children.toArray(children).map(child => (child as ReactElement).props.id).filter(tab => typeof tab === 'string' && tab !== '*');
            const selected = ((param: string | null) => (!param || !tabs.includes(param))  ? tabs.at(0) : param)(searchParams.get(param))
           if(selected !== searchParams.get(param)) {
            console.log("Inny PARAM!");
            const currentParams = new URLSearchParams(window.location.search);
            Object.keys({[param]: selected}).forEach(key => currentParams.set(param, selected))
            navigate({
                pathname: window.location.pathname,
                search: currentParams.toString()
            }); 
           } 
        }
    },[])

    if (param) {
        const tabs = React.Children.toArray(children).map(child => (child as ReactElement).props.id).filter(tab => typeof tab === 'string' && tab !== '*');
        const selected = ((param: string | null) => (!param || !tabs.includes(param))  ? tabs.at(0) : param)(searchParams.get(param))
        const body = React.Children.toArray(children).filter(child => (child as ReactElement).props.id === selected || (child as ReactElement).props.id === "*");
        return !tag ? <>{body}</> : createElement(tag, {className: className || ''}, body)
    }

    if (selected) {     
        const body = React.Children.toArray(children).filter(child => (child as ReactElement).props.id === selected);
        return !tag ? <>{body}</> : createElement(tag, {className: className || ''}, body)
    }

    if(depends) { 
        let onFalse = null; 
        const content = Children.map(children, (child, i) => { 
            if (isValidElement(child) && child.type === Content && child.props.Else) {
                onFalse = child;
                return null;
            }
            return child;
        }); 
        
        const body = depends.every((condition: boolean) => condition) ? content : onFalse;
        return !tag ? <>{body}</> : createElement(tag, {className: className || ''}, body)
    }

    const body = children;
 
    return !tag ? <>{body}</> : createElement(tag, {className: className || ''}, body)
}