import { CSSIcon } from "../../../../Components/CSSIcon/CSSIcon";
import { Title } from "../../../../Components/Title/Title";
import { CategoryData, QuestionData } from "../../../../State/category/types";
import './ManagerList.scss';

export const ListItem: React.FC<{
    item: QuestionData | CategoryData;
    type: 'category' | 'question';
    use?: (category: CategoryData | QuestionData, action: 'enter' | 'remove') => void;
}> = ({ item, type, use }) => { 
    return (
        <article className='manager-list-item'>
            <Title 
                className="manager-list-item__title"
                onClick={() => use && use(item, 'enter')}
                clickable
            >
                {item.title}
            </Title> 
 
            
            <CSSIcon
                className="manager-list-item__icon"
                type="close"
                color="orange"
                size="36"
                variant="round"
                onClick={() => use && use(item, 'remove')}
            />
        </article>
    );
};