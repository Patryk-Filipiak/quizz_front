import cn from 'classnames';
import './Dialogs.scss';

interface DialogsProps {
    className?: string;
}

export const Dialogs: React.FC<DialogsProps> = ({ className }) => {
    return (<main
        className={cn('dialogs', {
            [className || '']: !!className,
        })}
    >
        <section
            className='dialogs__popup'
        >
            <p className='dialogs__popup-container'>
                Jakiś tam popup!
            </p>

        </section>

        <section
            className='dialogs__toasts toasts'
        >
            <article className='toasts__item'>
                New Password has been sent!
            </article>

            <article className='toasts__item'>
                Wrong Password
            </article>
        </section>
    </main>)
}