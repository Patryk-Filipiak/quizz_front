import { Button } from "../../../Components/Form/Button";
import { Form } from "../../../Components/Form/Form"; 
import { PageSectionParams } from "../types";
import account from '../../../State/account/asyncReducers'
import cn from 'classnames'; 

export const Register: React.FC<PageSectionParams> = ({ dialog, dispatch, param }) => { 
    return (<>
        <h2 
            className={cn(['accountPage__title', 'title', 'title--page'])}
        >
            Stwórz Konto
        </h2>

        <div className="accountPage__actions">
            <Form
                submitText="Do dzieła!"
                className="accountPage__form"
                onSubmit={({username, password, email, rules}) => { 
                    if (username.trim().length < 3) return dialog.showToast('Login musi miec conajmniej 3 znaki.');
                    if (password.trim().length < 6) return dialog.showToast('Hasło musi miec conajmniej 6 znaków.');
                    if (Number(rules) > 0) return dialog.showToast('Musisz akceptowac regulamin, aby się zarejestrowac :)');
                    return dispatch(account.singup({ username, password, email, dialog }));
                } }
                fields={[
                    { 
                        id: 'username',
                        title: 'Nazwa użytkownika', 
                    },
            
                    {
                        id: 'password',
                        type: 'password',
                        title: 'Hasło'
                    },

                    {
                        id: 'email', 
                        title: 'Adres email',
                        type: 'email',
                    },

                    {
                        id: 'rules', 
                        title: 'Akceptujesz regulamin?',
                        type: 'radio',
                        options: ['Tak', 'Nie'],
                        value: '1',
                    }
                ]}
            />
            <section className="accountPage__buttons"> 
                <Button 
                    type="orange-big"
                    onClick={() => param({action: 'login'})}
                >
                    Zaloguj się
                </Button> 

                <Button
                    type="violet-big"
                    onClick={() => param({action: 'forgot-password'})}
                >
                    Zapomniałeś hasła?
                </Button> 
            </section>
        </div>
        
    </>);
}