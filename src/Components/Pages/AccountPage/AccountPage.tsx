import { useSelector } from "react-redux"; 
import './AccountPage.scss'
import { RootState } from "../../../State/store";
import { LoggedOut } from "./LoggedOut";
import { LoggedIn } from "./LoggedIn";
import { Content } from "../../Layout/Content";
import cn from 'classnames'; 

export const AccountPage:React.FC<{ className?: string }> = ({ className })  => {
    const { isLoggedIn, loading } = useSelector((state:RootState) => state.account);

    const [contentDepends, content] = Content.depends();

    contentDepends(<p>
        Please wait, data is loading.    
    </p>,[loading])
    (<LoggedOut />, [!loading, !isLoggedIn])
    (<LoggedIn />, [!loading, isLoggedIn]);



    return (<Content.Page 
        className={cn('accountPage', {
            [className || '']: !!className,
        })}
        children={content()}
    /> );
}