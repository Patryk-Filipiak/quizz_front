import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../Input/Input"; 
import { accountLogin, setUsername } from "../../../State/account/accountSlice";
import { Button } from "../../Button/Button";
import { AppDispatch, RootState } from "../../../State/store";
import { useState } from "react"; 

export const LoggedOut: React.FC = () => {

    const { data } = useSelector((state: RootState) => state.account);
    const dispatch = useDispatch<AppDispatch>(); 
    const [password, setPassword] = useState<string>('');
   
    return (<>
        <div 
            title='Logowanie'
            className="accountPage__loginBox"
            >
            <Input 
                title="Login" 
                type="text" 
                value={data.username}
                onChange={(v:string) => {
                    dispatch(setUsername(v)); 
                }}
            />

            <Input 
                title="Hasło"
                type="password"
                value="ero666" 
                onChange={(v:string) => setPassword(v)}
            />

            <Button 
                type="green"
                onClick={() => dispatch(accountLogin(password))}
            >
                Zaloguj się!
            </Button>
        </div> 
        <div 
            >
                Jakiś text z dupy

        </div>
    </>);
}