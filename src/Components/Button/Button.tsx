import { ReactNode } from 'react';
import './Button.scss';
import cn from 'classnames';

export const Button: React.FC<{
    id?: string;
    children?: ReactNode;
    type?: 'submit' | 'button' | 'small' | 'simple' | 'blue' | 'violet' | 'orange';
    color?: 'blue' | 'violet' | 'orange';
    background?: 'blue' | 'violet' | 'orange' | 'white' | 'dark';
    state?: 'default' | 'active' | 'disabled';
    className?: string;
    
    onClick?: () => void;
}> = ({ children, type='submit', onClick, className, color, background, state }) => {
    return <button 
        onClick={() => onClick && onClick()}
        className={cn(['button', 'button--' + type], {
            [className || '']: className,
            ['button--color-' + color]: color, 
            ['button--background-' + background]: background,
            [state || '']: state
        })}>
        {children}
    </button>
}