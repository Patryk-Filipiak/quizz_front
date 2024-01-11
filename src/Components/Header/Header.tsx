import { Link } from 'react-router-dom';
import cn from 'classnames';
import { List } from '../List/List';
import './Navigation.scss';  
import { CSSIcon } from '../CSSIcon/CSSIcon';
import { useState } from 'react';

export const Header: React.FC = () => {
    const [isListVisible, setIsListVisible] = useState<boolean>(false);
    
    return <>
        <h1 
            className={cn(['App__title', 'title', 'title--head'])}
        >
            Quizzy
        </h1>

        <List 
            htmlTag='nav'
            className={cn({open: isListVisible, navigation: true})}
            container='ul'
            items={[
                {title: 'Start', to: '/start'},
                {title: 'Oczekujące', to: '/pending'},
                {title: 'Zaloguj się', to: '/account'},
            ]}
            component={(link:{ title: string; to: string }) => (
                <Link 
                    to={link.to}
                    className={cn(['navigation__item', 'link', 'link--headerNav'])}
                >
                    {link.title}
                </Link>
            )}
        >  
            <CSSIcon 
                type="burger"
                className={cn('navigation__burger', {
                    open: isListVisible,
                })}
                onClick={() => setIsListVisible(curent => !curent)}
            />
        </List>
    </>;
}