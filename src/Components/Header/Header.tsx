import { Link } from 'react-router-dom';
import cn from 'classnames'; 
import { CSSIcon } from '../CSSIcon/CSSIcon';
import { ReactNode, useState } from 'react'; 
import './Header.scss';

interface HeaderProps {
    children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    const [isListVisible, setIsListVisible] = useState<boolean>(false);
    
    return (
        <header
            className='header'
        >
            <h1 
                className={cn(['header__title', 'title', 'title--head'])}
            >
                Quizzy
            </h1>

            <nav className={cn('header__nav', {
                open: isListVisible,
            })}> 
                {[
                    {title: 'Start', to: '/start'},
                    {title: 'Oczekujące', to: '/pending'},
                    {title: 'Zaloguj się', to: '/account'},
                ].map((link, key) => <Link 
                    key={key}
                    to={link.to}
                    className={cn(['header__nav-item', 'link', 'link--headerNav'])}
                >
                    {link.title}
                </Link>)} 
            </nav>

            <CSSIcon 
                type="burger"
                className={cn('header__icon', {
                    open: isListVisible,
                })}
                onClick={() => setIsListVisible(curent => !curent)}
            />

            {children}
        </header>);
}