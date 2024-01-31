import { Button } from '../Button/Button';
import './Confirm.scss';

export const Confirm: React.FC<{
    text: string;
    onConfirm: () => void;
    onCancel: () => void;
}> = ({ text, onConfirm, onCancel}) => {
    return <main className="confirm-window">
        { text }
        <section className='confirm-window__actions'>
            <Button
                type="simple"
                color="orange"
                onClick={() => onConfirm && onConfirm()}
            >
                Tak
            </Button>

            <Button
                type="simple"
                color="orange"
                onClick={() => onCancel && onCancel()}
            >
                Nie
            </Button>
        </section>
    </main>;
}