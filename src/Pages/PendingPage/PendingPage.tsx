import { Content } from "../../Components/Layout/Content"; 
import cn from 'classnames';   

export const PendingPage:React.FC<{ className?: string }> = ({ className })  => {

  

    return (<Content.Page 
        className={cn('accountPage', {
            [className || '']: !!className,
        })}
        >
            <h2>
                Tutaj będą oczekujące kategorie i pytania !
            </h2>
        </Content.Page>
        );
}