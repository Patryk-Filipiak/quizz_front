import cn from 'classnames';  
import { useAppContext } from '../../../Context/AppContext';
import { Content } from '../../../Components/Content';
import { FLAGS } from '../../../Context/account/useAccount';

export const Profile: React.FC<{id?:string}> = () => { 
    const {profile} = useAppContext();
    return (<Content>
        <Content depends={[profile.hasFlag(FLAGS.IS_ACTIVE)]} children={<p>ACTIVE YOUR ACCOUNT!</p>}/>
    </Content>);
}