import { FormEvent, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import cn from 'classnames';
import './Form.scss';

interface InputField {
    id?: string;
    title: string;
    onChange?: (value: string) => void;
    value?: string;
    type?: 'text' | 'password';
}

interface Props {
    submitText: string;
    onSubmit?: (fieldsData: {[fieldId: string]: string}) => void;
    fields: InputField[];
    className?: string;
}

export const Form: React.FC<Props> = ( { fields, submitText, onSubmit, className }) => {

    const [fieldsData, setFieldsData] = useState<{[fieldId: string]: string}>({});
    useEffect(() => setFieldsData(fields.reduce((data:{[fieldId: string]: string}, field) => {
            if (field.id) {
                data[field.id] = field.value || '';
            }

            return data;
        }, {})), [fields]);

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