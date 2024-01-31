import {  Children, ReactNode, cloneElement, isValidElement, useState } from "react"; 

type ChildProps = {
    id?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | ((value: string) => void);
};

export const Form: React.FC<{
    id?: string;
    children?: ReactNode;
    className?: string;
    onSubmit: (data:{[key: string]: string}) => void;
    validation?: (data:{[key: string]: string}) => boolean; 
    
}> = ({onSubmit, className, children, validation}) => {

    const [formState, setFormState] = useState<{[key: string]: string}>(Children.toArray(children).reduce((state: {[key: string]: string}, child) => {
        if (isValidElement(child) && child.props.id) {
            state[child.props.id] = child.props.value || '';
        }
        return state;
    }, {}));
    const handleInputChange = (id :string, value: string) => setFormState(current => ({ ...current, [id]: value }));
    return <form
    action=""
    method=""
    onSubmit={(e) => {
        e.preventDefault();
        if (validation && !validation(formState)) {
            return;
        }
        
        if(onSubmit) {
            return onSubmit(formState);
        }
    }}
    className={className}
    >
        {Children.map(children, child => {
            if (isValidElement<ChildProps>(child) && child.props.id) {
                return cloneElement(child, {
                    value: formState[child.props.id],
                    onChange: child.type === 'input' || child.type === 'textarea' 
                        ? (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(child.props.id || '', e.target.value)
                        : (value: string) => handleInputChange(child.props.id || '', value)
                });
            }
            return child;
        })}
    </form>;
}