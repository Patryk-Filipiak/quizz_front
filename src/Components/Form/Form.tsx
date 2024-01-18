import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import cn from 'classnames'; 

interface InputField {
    id?: string;
    title: string;
    onChange?: (value: string) => void;
    value?: string;
    type?: 'text' | 'password' | 'email' | 'radio';
    options?: string[];
}

interface Props {
    submitText: string;
    onSubmit?: (fieldsData: {[fieldId: string]: string}) => void;
    fields: InputField[];
    className?: string;
}

export const Form: React.FC<Props> = ( { fields, submitText, onSubmit, className }) => {

    const [fieldsData, setFieldsData] = useState<{[fieldId: string]: string}>(fields
        .reduce((data:{[fieldId: string]: string}, field) => {
            if (field.id) {
                data[field.id] = field.value || '';
            } 

            return data; 
        }, {})); 

    return (
        <form 
            action="/"
            method="post"
            className={cn('form', {
                [className || '']: !!className,
            })}
            onSubmit={(event:FormEvent) => {
                event.preventDefault();
                if (onSubmit) {
                    return onSubmit(fieldsData);
                }
            }
        }>
            {fields.map((field, key) => <Input key={key}
                title={field.title}
                value={field.value || ''} 
                type={field.type || 'text'}
                options={field.options}
                onChange={(value: string) => {
                    if (field.id) {
                        setFieldsData(current => ({...current, [field.id || '']: value}));
                    }
                    
                    if (field.onChange) { 
                        field.onChange(value);
                    }
                }}
            />)}

            <Button
                type="blue"
            >{submitText}</Button>
        </form>);
}