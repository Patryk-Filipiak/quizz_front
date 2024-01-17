import { Link } from "react-router-dom"
import cn from 'classnames';
import { useSelector } from "react-redux";
import { RootState } from "../../State/store";
import { useMemo } from "react";

export const Navigation: React.FC<{
    isOpen: boolean;
    changeState: () => void;
}> = ({ isOpen, changeState }) => {
    const { isLoggedIn, loading, data } = useSelector((state:RootState) => state.account);

    const navItems = useMemo(() => {
        const navList = [
            {title: 'Start', to: '/start'},
            {title: 'Oczekujące', to: '/pending'},
            {title: ((loading: boolean, loggedIn: boolean) => { 
                if (loading) return '...';
                return loggedIn ? 'Konto' : 'Zaloguj się';
            })(loading, isLoggedIn), to: '/account'},
        ];
        console.log('navList ', data)

        return navList;
    },[isLoggedIn, loading]);
    
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