import cn from 'classnames';
import './Dialogs.scss';
import { useDialogContext } from '../../Context/useDialogContext';

interface DialogsProps {
    className?: string;
}

export const Dialogs: React.FC<DialogsProps> = ({ className }) => {

    const { popup, toasts } = useDialogContext();

    return (<main
        className={cn('dialogs', {
            [className || '']: !!className,
        })}
    >
        <section
            className='dialogs__popup'
        >
            <p className='dialogs__popup-container'>
                {popup}
            </p>

        </section>

        <section
            className='dialogs__toasts toasts'
        >
            {toasts.map(({ content }, key) => (<article 
                className='toasts__item'
                key={key}
            >
                {content}
            </article>))}  
        </section>
    </main>)
}
