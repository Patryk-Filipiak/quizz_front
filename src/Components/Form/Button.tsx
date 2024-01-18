import { ReactNode } from "react"
import cn from 'classnames';
import './Button.scss';

export const Button: React.FC<{
    children?: ReactNode;
    type?: string;
    onClick?: () => void;
    
}> = ({ children, type, onClick = () => null }) => {

    return (<button
        onClick={onClick}
        className={cn('button', {
            ['button--' + type]: type,
        })}
    >
        {children}
    </button>)
}