import { Content } from "../../Components/Layout/Content";
import { Login } from "./Sections/Login";
import cn from 'classnames';  
import './AccountPage.scss' 
import { useDialogContext } from "../../Context/useDialogContext";
import { Register } from "./Sections/Register";
import { Profile } from "./Sections/Profile";
import { Settings } from "./Sections/Settings";


export const AccountPage:React.FC<{ className?: string }> = ({ className })  => {
    const dialog = useDialogContext();
    const { isLoggedIn, loading } = dialog.account;
    const param = Content.useParam();
    const [contentDepends, content] = Content.depends(); 
    const sectionHooks = {param, dispatch: dialog.dispatch, dialog }
     
    
    contentDepends(<p>
        Please wait, data is loading.    
    </p>,[loading]);
 
    contentDepends(<Content.Param selector="action" >
        <Content.Tab id="login" children={<Login {...sectionHooks} />} />
        <Content.Tab id="register" children={<Register {...sectionHooks} />} />
        <Content.Tab id="forgot-password" children="Forgot Password" />
    </Content.Param>, [!loading, !isLoggedIn]);

    contentDepends(<Content.Param selector="action" >
        <Content.Tab id="profile" children={<Profile {...sectionHooks} />} />
        <Content.Tab id="settings" children={<Settings {...sectionHooks} />} /> 
    </Content.Param>, [!loading, isLoggedIn]);


    return (<Content.Page 
        className={cn('accountPage', {
            [className || '']: !!className,
        })}
        children={content()}
    /> );
}