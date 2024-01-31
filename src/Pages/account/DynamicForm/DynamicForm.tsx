import { Button } from "../../../Components/Button/Button";
import { CSSIcon } from "../../../Components/CSSIcon/CSSIcon";
import { Content } from "../../../Components/Content"
import { Form } from "../../../Components/Form";  
import { WhiteInput } from "../../../Components/Input/WhiteInput";
import { useAppContext } from "../../../Context/AppContext";
import './DynamicForm.scss';

export const DynamicForm: React.FC<{
    id?: string;
    className?: string; 
    param: string;
}> = ({ className, param }) => {
    const { profile, dialog, categories } = useAppContext();
    const { login, singup } = profile; 
    const { create } = categories;

    return <Content param={param}> 
        <Form id="login"
            className={className}
            onSubmit={(data) => login(data.username, data.password)}
            validation={(data) => {
                if(!data.username || !data.password) {
                    return false;
                }

                if(data.username.length < 3) {
                    dialog.toast.send('Nazwa użytkownika jest zbyt krótka.')
                    return false;
                }

                if(data.password.length < 6) {
                    dialog.toast.send('Hasło jest zbyt krótkie.')
                    return false;
                }
                return true;
            }}
        >
            <WhiteInput type="text" title="Nazwa użytkownika" id="username" className={className && className + '-item'}/> 
            <WhiteInput type="password" title="Hasło" id="password" className={className && className + '-item'} /> 
            <Button>Zaloguj!</Button> 
            
        </Form>

        <Form 
            id="categories"
            className="manager__form easyForm"
            onSubmit={(data) => create(data.title, categories.state.current?.id || undefined)}
            validation={(data:{[key: string]: string}) => {
                if(!data.title) {
                    return false;
                }
        
                if(data.title.length < 3) {
                    dialog.toast.send('Nazwa kategorii jest zbyt krótka.')
                    return false;
                } 
                return true;
            }}
        >  
            <input id="title" placeholder="Nazwa kategorii" className="easyForm__input simpleInput"/>  
            <CSSIcon  
                type={"increase"}
                variant="round"
                size="36"
                color="positive"
                isButton
            />
        </Form> 

        <Form id="register"
            className={className}
            onSubmit={(data) => singup(data.username, data.password, data.email)}
            validation={(data:{[key: string]: string}) => {
                if(!data.username || !data.password) {
                    return false;
                }
        
                if(data.username.length < 3) {
                    dialog.toast.send('Nazwa użytkownika jest zbyt krótka.')
                    return false;
                }
        
                if(data.password.length < 6) {
                    dialog.toast.send('Hasło jest zbyt krótkie.')
                    return false;
                } 
                return true;
            }}
        >
            <WhiteInput type="text" title="Nazwa użytkownika:" id="username" /> 
            <WhiteInput type="password" title="Hasło:" id="password" /> 
            <WhiteInput type="email" title="Adres email:" id="email" /> 
            <WhiteInput type="radio" title="Akceptujesz regulamin?" id="reg" options={['Tak', 'Nie']}/> 
            <Button>Rejestruj</Button>  
        </Form>

        <Form 
            id="questions"
            className="manager__form easyForm"
            onSubmit={(data: { [key: string]: string; }) => {
                console.log("Odebrana data:", data)
            }}
        >  
            <textarea id="title" placeholder="Treśc pytania" className="easyForm__input simpleInput"/> 
            <CSSIcon  
                type={"increase"}
                variant="round"
                size="36"
                color="positive"
                isButton
            />
        </Form>     
    </Content>;

}