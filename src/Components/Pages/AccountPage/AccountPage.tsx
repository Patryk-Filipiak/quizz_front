import { useDispatch, useSelector } from "react-redux"; 
import { AppDispatch, RootState } from "../../../State/store"; 
import { Content } from "../../Layout/Content";
import { Login } from "./Login";
import cn from 'classnames';  
import './AccountPage.scss'
import { Button } from "../../Button/Button";
import { accountLogout } from "../../../State/account/accountSlice";
import { useDialogContext } from "../../../Context/useDialogContext";


export const AccountPage:React.FC<{ className?: string }> = ({ className })  => {
    const { isLoggedIn, loading, data } = useSelector((state:RootState) => state.account);
    const dialog = useDialogContext();
    const [contentDepends, content] = Content.depends();
    const dispatch = useDispatch<AppDispatch>(); 
     
    
    contentDepends(<p>
        Please wait, data is loading.    
    </p>,[loading]);


 
    contentDepends(<Content.Param
        selector="action"
    >
        <Content.Tab id="login" children={<Login 
            username={data.username}
        />} />
        <Content.Tab id="register" children="Register" />
        <Content.Tab id="forgot-password" children="Forgot Password" />


    </Content.Param>, [!loading, !isLoggedIn])
    (<Content.Param
        selector="action"
    >
        <Content.Tab id="profile" children={<Button
            onClick={() => dispatch(accountLogout({ dialog }))}
        >
            Wyloguj się
        </Button>} />
        <Content.Tab id="settings" children="ustawienia" />
        <Content.Tab id="manager" children="Admin Menager" />
    </Content.Param>, [!loading, isLoggedIn]);



    return (<Content.Page 
        className={cn('accountPage', {
            [className || '']: !!className,
        })}
        children={content()}
    /> );
}