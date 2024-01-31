import cn from 'classnames';
import './Footer.scss';

export const Footer: React.FC<{className?:string}> = ({ className }) => {

    return <footer className={cn("footer", {
        [className || '']: !!className,
    })}>
        <div className='footer__first'>
            first
        </div>

        <div className='footer__second'>
            copyrights
        </div>

        <div className='footer__third'>
            erchu
        </div>
    </footer>;
}