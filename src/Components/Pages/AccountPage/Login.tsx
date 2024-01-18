import { useDispatch } from "react-redux";
import { Button } from "../../Button/Button";
import { Form } from "../../Form/Form";
import cn from 'classnames';
import { AppDispatch } from "../../../State/store";
import { accountLogin, setUsername } from "../../../State/account/accountSlice";
import { useDialogContext } from "../../../Context/useDialogContext";
import { Content } from "../../Layout/Content";

export const Login: React.FC<{
    username: string;
}> = ({ username }) => {
    const dispatch = useDispatch<AppDispatch>();
    const dialog = useDialogContext();
    const param = Content.useParam();
    
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
                onSubmit={({ password }) => dispatch(accountLogin({ password, dialog })) }
                fields={[
                    { 
                        title: 'Login',
                        onChange: (v: string) => dispatch(setUsername(v)),
                        value: username,
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