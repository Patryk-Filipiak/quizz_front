import { useDialogContext } from "../../Context/useDialogContext";
import { Content } from "../Layout/Content";
import cn from 'classnames';

export const PageNotFound:React.FC<{ className?: string }> = ({ className }) => {
    const {showToast} = useDialogContext();
    return (<Content.Page 
        className={cn('pageNotFound', {
            [className || '']: !!className,
        })}
    >
         <h2 onClick={() => showToast('clickd!')}>
            Page not found!
         </h2>
         <Content.Tabs selected="opcja1">
            <Content.Tab 
                id="opcja1"
                children={ <p>HaHa</p>}   
            />
                    
            <Content.Tab 
                id="opcja2" 
                children={<p>xdxd</p>} 
            /> 
         </Content.Tabs>
    </Content.Page>);
}