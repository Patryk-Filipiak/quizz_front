import { CSSIcon } from "../CSSIcon/CSSIcon"; 
import cn from 'classnames';
import './Nav.scss';
import React from "react";

interface NavProps<T> {
    items?: T[];
    burgerType?: 'default' | 'mini';
    className?: string;
    children?: (item: T) => React.ReactNode;
    type?: 'app' | 'page';
}

export const Nav = <T,>({ type='page', items = [] as T[], className = '', burgerType = 'default', children }: NavProps<T>): React.ReactElement => {
    return children ? <label className={cn('nav', {
        [className]: className, 
    })}>
        <input type="checkbox" className="nav__hidden-checkbox"/>

        <CSSIcon 
            className={cn(['nav__icon', 'nav__icon--' + type])}
            type={burgerType === 'default' ? 'burger' : 'mini-burger'}  
            color={type === 'app' ? 'violet' : 'orange'}
        />

        <nav className={cn('nav__link-list', {
        [className + "-list"]: className, 
    })}>
            {items.map((item, key) => <React.Fragment key={key}>{children(item)}</React.Fragment>)}
        </nav>
    </label> : <></>;
}