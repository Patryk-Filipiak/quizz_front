import { Content } from "../../Components/Content";
import { Page } from "../../Components/Layout/Page";    
import { useAppContext } from "../../Context/AppContext";  
import { Header } from "../../Components/Header/Header";
import { DynamicForm } from "./DynamicForm/DynamicForm";
import { Button } from "../../Components/Button/Button";
import { Profile } from "./sections/Profile";
import { Settings } from "./sections/Settings"; 
import './Account.scss';  
import { Manage } from "./manage/Manage";

type item = {
    title: string,
    param?: string;
    action?: () => void;
}

export const Account: React.FC = () => {
    const { profile, use } = useAppContext();
    const { state } = profile;  

    const actionParam = use.searchParams.get('action') || (state.isLoggedIn ? 'profile' : 'login');

    const nav:item[] =  state.isLoggedIn ? [
        { title: 'Profil', param: 'profile' },
        { title: 'Ustawienia', param: 'settings' },
        { title: 'Admin' , param: 'admin'},
        { title: 'Wyloguj' , action: () => { profile.logout()}},
    ] : [];

    return <Page className="Account">
        <Header
                id="*"
                navLinks={nav}  
                className="Account__header"
                title={{profile:'Profil',settings:'Ustawienia',admin:'Zarządzaj', login:'Zaloguj',register:'Stwórz konto!'}[actionParam] || ''}
            > 
                {(item: item) => <a 
                    className="Account__nav-link"
                    href="/#"
                    onClick={(e) => {
                        e.preventDefault();
                        if(item.param) use.param({action: item.param || ''});
                        if(item.action) return item.action();
                    }}
                > { item.title } 
            </a>}
        </Header>

        <Content depends={[state.loading]}>
            <p>Please wait, data is loading...</p>
            <Content Else depends={[!state.isLoggedIn]}> 
                <DynamicForm 
                    className="Account__form"
                    param="action"
                />  

                <nav className="Account__form">
                    <Button 
                        type="violet"
                        onClick={() => use.param({ action: actionParam === 'login'
                            ? 'register' 
                            : 'login'
                        })}
                    >
                        {actionParam === 'login' ? 'Stwórz konto' : 'Zaloguj się'}
                    </Button>

                    <Button 
                        type="orange"
                    >
                        Resetuj hasło
                    </Button> 
                </nav>

                <Content Else param="action" >  
                    <Profile id="profile"/>

                    <Settings id="settings"/>

                    <Content 
                        id="admin"
                        // depends={[profile.hasFlag(FLAGS.CAN_SEE_PANEL)]} 
                        children={<Manage />} 
                    />
                </Content>
            </Content>
        </Content>
    </Page>;
}