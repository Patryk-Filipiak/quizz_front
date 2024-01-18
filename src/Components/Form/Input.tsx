import { useState } from 'react';
import './Input.scss';
import { RadioInput } from './RadioInput';

interface Props {
    type?: 'text' | 'password' | 'textarea' | 'category' | 'radio' | 'email';
    title: string;
    options?: string[]
    value?: string;
    onChange?: (v:string) => void;
}

export const Input: React.FC<Props> = ({ 
    type = 'text',
    title,
    options = [],
    value = '',
    onChange
}) => {
    const [inputValue, setInputValue] = useState<string>(value);
    const inputParams = {type, value: inputValue, options}

    const onChangeValue = (v: string) => {
        setInputValue(v); 
        if (onChange) onChange(v);
    }

    return (<label className="Input">
        <p className="Input__title">
            {title}
        </p>

        {['text', 'password', 'email'].includes(type) && <input 
            className="Input__field" {...inputParams} 
            onChange={(e) => onChangeValue(e.target.value)} 
        />}

        {type === 'textarea' && <textarea
            className='Input__field' 
            {...inputParams}
            onChange={(e) => onChangeValue(e.target.value)}
        />}

        {type === 'radio' && <RadioInput {...inputParams} onChange={onChangeValue} />}
        
    </label>)
}