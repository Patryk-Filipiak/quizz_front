import { Button } from "../../../Components/Form/Button";
import { Form } from "../../../Components/Form/Form";
import cn from 'classnames';  
import { PageSectionParams } from "../types";
import account from '../../../State/account/asyncReducers'

export const Login: React.FC<PageSectionParams> = ({ dialog, dispatch, param }) => { 
    
    return (<>
        <h2 
            className={cn(['accountPage__title', 'title', 'title--page'])}
        >
            Logowanie
        </h2>

        <div className="accountPage__actions">
            <Form
                submitText="Zaloguj się"
                className="accountPage__form"
                onSubmit={({ username, password }) => dispatch(account.login({ username, password, dialog })) }
                fields={[
                    { 
                        title: 'Nazwa użytkownika', 
                        id: 'username',
                    },
            
                    {
                        id: 'password',
                        type: 'password',
                        title: 'Hasło'
                    }
                ]}
            />

            <section className="accountPage__buttons"> 
                <Button 
                    type="orange-big"
                    onClick={() => param({action: 'register'})}
                >
                    Stwórz konto
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