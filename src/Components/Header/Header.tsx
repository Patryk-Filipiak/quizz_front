import cn from 'classnames';  
import './Header.scss';
import { Navigation } from './Navigation';
import { useState } from 'react';
import { CSSIcon } from '../CSSIcon/CSSIcon';
 

export const Header: React.FC <{ className?: string }>= ( { className } ) => {
    const [isListVisible, setIsListVisible] = useState<boolean>(false);

    return (
        <header
            className={cn('header', {
                [className || '']: !!className
            })}
        >
            <h1 
                className={cn(['header__title', 'title', 'title--head'])}
            >
                Quizzy
            </h1>

            <Navigation 
                isOpen={isListVisible}
                changeState={() => setIsListVisible(current => !current)}
            />

            <CSSIcon 
            type="burger"
            className={cn('header__icon', {
                open: isListVisible,
            })}
            onClick={() => setIsListVisible(current => !current)}
        /> 
        </header>);
}