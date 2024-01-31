import cn from 'classnames';
import './PopUp.scss'; 
import { ReactNode } from 'react';

export const PopUp: React.FC<{
    className: string;
    content: ReactNode | null;
}> = ({ className, content }) => {
    return <section className={cn('popup', {
        [className || '']: className,
    })}>
        {content}
    </section>;
}