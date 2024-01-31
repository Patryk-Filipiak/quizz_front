import cn from 'classnames';
import './Toasts.scss';
import { Toast } from '../../../Context/types';

export const Toasts: React.FC<{
    className: string;
    items: Toast[];
}> = ({ className, items }) => {
    return <section className={cn('toasts', {
        [className || '']: className,
    })}>
        {items.map(({ content }) => <article className='toasts__message'>
            { content }
        </article>)}
    </section>;
}