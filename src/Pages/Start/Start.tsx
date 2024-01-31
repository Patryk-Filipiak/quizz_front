import { Content } from "../../Components/Content";
import { Page } from "../../Components/Layout/Page"; 
import { AppContextInterface } from "../../Context/types";  

export const Start: React.FC<{ context: AppContextInterface }> = ({
}) => <Page>
    <Content param="type">
        <p id="typeOne">
            TypeOne
        </p>
        <p id="TypeTwo">
            TypeTwo
        </p>
    </Content>
    
</Page>