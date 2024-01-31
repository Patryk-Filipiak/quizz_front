import cn from 'classnames';
import { Title } from '../Title/Title';
import { Nav } from '../Nav/Nav';
import './Header.scss'; 


type HeaderProps<T> = {
    id?: string;
    className?: string;
    type?: 'app' | 'page' ;
    title: string;
    navLinks: T[];
    children?: (item: T) => React.ReactNode;
}


export const Header = <T,>({ 
    type='page', title='', className='', children, navLinks
}: HeaderProps<T>): React.ReactElement => {

    return <header className={cn('header', {
        [className]: className,
        ['header--type-' + type]: type,
    })} id="*"> 
        <Title  
            type={type}
            className={cn("header__title", {
                [className + "-title"]: className,
            })}
            text={title}
        />

        {navLinks.length > 0 && <Nav
            className="header__nav"
            items={navLinks}
            burgerType={type === 'page' ? 'mini' : 'default'}
            type={type}
            children={children}
        />}
</header>;;
}; 