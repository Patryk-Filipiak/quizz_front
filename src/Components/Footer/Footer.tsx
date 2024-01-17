import './Footer.scss';
import cn from 'classnames';
 
export const Footer: React.FC<{ className?: string }> = ( { className } )  => (
    <footer
    className={cn('footer', {
        [className || '']: !!className
    })}
    >  
        <p>cos pierwsze</p>
        <p>second thing</p>
        <p>&copy 2024 Quizzy</p> 
    </footer>);