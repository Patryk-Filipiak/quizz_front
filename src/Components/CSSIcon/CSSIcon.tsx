import cn from 'classnames';
import './CSSIcon.scss'; 

interface Props {
    type: 'burger' | 'close';
    className?: string;
    onClick?: () => void;
}

export const CSSIcon: React.FC<Props> = ({ type, className, onClick }) => {
    return (<article
        className={cn([
            'icon',
            'icon--' + type
        ], {
            [className || '']: !!className
        })}
        onClick={onClick}
    >
        <div /> 

        <div /> 
 
        <div />  
    </article>)
}