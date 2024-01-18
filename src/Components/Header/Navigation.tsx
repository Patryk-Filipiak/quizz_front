/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import cn from 'classnames';
import { useSelector } from "react-redux";
import { RootState } from "../../State/store";
import { useMemo } from "react";

export const Navigation: React.FC<{
    isOpen: boolean;
    changeState: () => void;
}> = ({ isOpen, changeState }) => {
    const { isLoggedIn, loading } = useSelector((state:RootState) => state.account);

    const navItems = useMemo(() => [
            {title: 'Start', to: '/start'},
            {title: 'Oczekujące', to: '/pending'},
            {title: ((loading: boolean, loggedIn: boolean) => { 
                if (loading) return '...';
                return loggedIn ? 'Konto' : 'Zaloguj się';
            })(loading, isLoggedIn), to: '/account'},
        ],[isLoggedIn, loading]);
    
    return (
    <nav className={cn('header__nav', {
        open: isOpen,
    })}> 
        {navItems.map((link, key) => <Link 
            key={key}
            to={link.to}
            className={cn(['header__nav-item', 'link', 'link--headerNav'])}
            onClick={() => isOpen && changeState()}
        >
            {link.title}
        </Link>)} 
    </nav>);
}