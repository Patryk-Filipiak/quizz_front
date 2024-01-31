/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Content } from '../../../Components/Content';
import { useAppContext } from '../../../Context/AppContext';
import { List } from '../../../Components/List';  
import { ListItem } from './manager-list/ListItem'; 
import { Title } from '../../../Components/Title/Title';
import { CSSIcon } from '../../../Components/CSSIcon/CSSIcon';
import { Button } from '../../../Components/Button/Button';
import './Manage.scss';  
import { DynamicForm } from '../DynamicForm/DynamicForm';
import { Confirm } from '../../../Components/Confirm/Confirm';
import { CategoryData, QuestionData } from '../../../State/category/types';

interface ListItemProps {
    id: string;
    title: string;
    type: 'category' | 'question';
    items: any[];
    depends: boolean[];
    use?: (category: CategoryData | QuestionData, action: 'enter' | 'remove') => void;
}

export const Manage: React.FC = () => { 
    const { use, categories, dialog } = useAppContext();

    useEffect(() => {
        categories.get(use.searchParams.get('category') || undefined);
    }, [use.searchParams.get('category')]);

    const { state } = categories;
    const manage = use.searchParams.get('manage');
    const display = use.searchParams.get('display');

    const lists: ListItemProps[] = [
        {
            id: 'categories',
            title: state.current?.id ? 'Podkategorie' : 'Kategorie Główne',
            type: 'category',
            items: state.current?.subcategories || [],
            depends: [], 
            use: (category: CategoryData | QuestionData, action: 'enter' | 'remove') => {
                if(action === 'enter') use.param({category: String(category.id)})

                if(action === 'remove' && (category as CategoryData).subcategories.length > 0) {
                    return dialog.toast.send('Nie można usunąc kategorii która ma podkategorie.')
                }else if(action === 'remove') dialog.popup.show(<Confirm
                    onConfirm={() => {category.id && categories.delete(category.id); dialog.popup.cancel(); } } 
                    onCancel={() => dialog.popup.cancel()} 
                    text={`Jesteś pewien, że chcesz usunąc kategorię ?`}
                />);
                }
        },
        {
            id: 'questions',
            title: 'Pytania',
            type: 'question',
            items: state.questions || [],
            depends: [(state.current?.id || 0) > 0], 
        },
    ];
 


    return (<Content param="admin">
        <Content id="quizz" depends={[state.loading]}>
            Trwa wczytywanie danych....
            <Content Else tag="section" className='Account__content manager'>  
                <article 
                    id="*"
                    className='manager__actions'
                > 
                    <div>
                        {state.current?.title && <CSSIcon
                            type='prev'
                            size="36"  
                            variant='round'                  
                            onClick={() => use.param({category: state.current?.parent ? (state.current?.parent.slug || '') : ''})}
                            color="orange"
                        />}
                        <Title type="section">{state.current?.title || 'Nie wybrano kategorii'} </Title>
                    </div>
         

                    <Content 
                        param="display" 
                    >
                        <Content id="tabs" tag="div">
                            {lists.map((list: ListItemProps) => <Button  
                                key={list.id} 
                                id="tabs"
                                type="simple"
                                color="orange"
                                background="white"
                                onClick={() => use.param({'manage': list.id})}
                                state={manage === list.id ? 'active' : 'default'}
                            >
                                {list.title}
                            </Button>)}
                        </Content> 
                        <DynamicForm id="form" param='manage'/>
                    </Content>
 
                    <CSSIcon 
                        type={display === 'form' ? 'close' : 'increase'}
                        variant="round"
                        color="orange"
                        size="36"
                        onClick={() => use.param({'display': display === 'form' ? 'tabs' : 'form'})}
                    /> 
                </article>  

                <Content param="manage" tag="article" className='manager__list manager-list'> 
                    {lists.map((list: ListItemProps) => <List id={list.id} key={list.id} items={list.items} >
                        {(item) => <ListItem type={list.type}  item={item} use={list.use} />}
                    </List>)}  
                </Content> 
            </Content>
        </Content>       
        <section id="users">Users</section>        
    </Content>);
}