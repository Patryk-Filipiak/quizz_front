import './UserDialogs.scss';

export const UserDialogs: React.FC = () => {
    return (<section className="dialogs">
            <section className='dialogs__toasts toasts'>
                <article className='toasts__item'>
                    Wrong Password
                </article>
                <article className='toasts__item'>
                    Wrong Password
                </article>
            </section>
            <article className='cookies'>
                <h2>Cookies</h2>
                <p>Informacje about cookies ... </p>
            </article>
        </section>);

}