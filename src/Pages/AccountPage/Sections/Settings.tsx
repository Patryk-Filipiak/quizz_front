import { Button } from "../../../Components/Form/Button"; 
import account from '../../../State/account/asyncReducers'
import { PageSectionParams } from "../types";
import cn from 'classnames';  

export const Settings: React.FC<PageSectionParams> = ({ dialog, dispatch, param }) => { 
    
    return (<>
        <header className="accountPage__header">
            <h2 
                className={cn(['accountPage__title', 'title', 'title--page'])}
            >
                Ustawienia
            </h2>
            <nav className="accountPage__header-nav">
                <Button
                    onClick={() => dispatch(account.logout({ dialog }))}
                    children="Wyloguj się"
                    type="small"
                />

                <Button type="small" 
                    children="Profil" 
                    onClick={() => param({action: 'profile'})}
                /> 
            </nav>
        </header>
        
 
        
    </>);
}