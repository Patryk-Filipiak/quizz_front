import React, { ReactNode } from "react";
import cn from 'classnames';
import './Title.scss';

export const Title: React.FC<{
    type?: 'app' | 'page' | 'section' | 'title';
    text?: string;
    children?: ReactNode;
    className?: string;
    id?:string;
    onClick?: () => void;
    clickable?: boolean;

}> = ({ type = 'title', text, children, className,onClick, clickable=false }) => React.createElement(
    {
        'app': 'h1',
        'page': 'h2',
        'section': 'h3',
        'title': 'h4'
    }[type],
{
    onClick: () => onClick && onClick(),
    className: cn(['title', 'title--' + type], {
        [className || '']: !!className,
        'title--variant-clicable': clickable,
    })
},
children || text || null
)