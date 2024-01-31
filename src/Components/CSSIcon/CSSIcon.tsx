import cn from 'classnames';
import './CSSIcon.scss'; 

interface Props {
    type: 'burger' | 'close' | 'next' | 'increase' | 'decrease' | 'prev' | 'mini-burger';
    size?: '24' | '36' | '48' | '60' | '72';
    variant?: 'transparent' | 'round' | 'square' | 'button';
    state?: 'default' | 'active' | 'disabled';
    color?: 'white' | 'dark' | 'black' | 'blue' | 'violet' | 'orange' | 'positive';
    background?: 'white' | 'dark' | 'black' | 'blue' | 'violet' | 'orange';
    className?: string;
    isButton?: boolean;
    onClick?: () => void;
}

export const CSSIcon: React.FC<Props> = ({ color, background, size = 24, type, className, onClick, state, variant, isButton}) => {
    const Component = isButton ? 'button' : 'article';
    return (<Component
        className={cn([
            'icon',
            'icon--type-' + type,
        ], {
            ['icon--size-' + size]: size,
            ['icon--variant-' + variant]: variant,
            ['icon--color-' + color]: color,
            ['icon--background-' + background]: background,
            ['icon--state-' + state]: state,
            [className || '']: !!className, 

        })}
        onClick={onClick}
    >
        <div />  
        <div />  
        <div />  
        <div />  
        <div />  
    </Component>)
}