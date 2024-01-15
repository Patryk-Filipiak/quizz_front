import cn from 'classnames';
import './Layout.scss';

export const Layout: React.FC<{
    theme?: 'app' | 'tab' | 'titledBox' | 'page';
    children?: React.ReactNode; 
    title?: string;
    tagName?: string;
    className?: string;
}> = ({
    theme='column', 
    className, 
    tagName = 'section',
    children,
}) =>  {
    const Element = tagName as keyof JSX.IntrinsicElements;
    return (<Element
        className={cn([
            'Layout',
            [`Layout--${theme}`]
        ], {
            [className || '']: !!className
        })}
    > 
        {theme === 'app' && children}
        {theme === 'page' && children}
    </Element>);
} 