import { useState } from 'react';
import './WhiteInput.scss';
import { RadioInput } from './RadioInput';

interface Props {
    type?: 'text' | 'password' | 'textarea' | 'category' | 'radio' | 'email';
    title: string;
    options?: string[]
    id?: string;
    value?: string;
    onChange?: (v:string) => void;
    className?: string;
}

export const WhiteInput: React.FC<Props> = ({ 
    id,
    type = 'text',
    title,
    options = [],
    value = '',
    onChange,
    className
}) => {
    const [inputValue, setInputValue] = useState<string>(value);
    const inputParams = {type, value: inputValue, options}

    const onChangeValue = (v: string) => {
        setInputValue(v); 
        if (onChange) onChange(v);
    }

    return (<label className={`WhiteInput ${className ? className : ''}`}>
        <p className="WhiteInput__title">
            {title}
        </p>

        {['text', 'password', 'email'].includes(type) && <input 
            className="WhiteInput__field" {...inputParams} 
            onChange={(e) => onChangeValue(e.target.value)} 
        />}

        {type === 'textarea' && <textarea
            className='WhiteInput__field' 
            {...inputParams}
            onChange={(e) => onChangeValue(e.target.value)}
        />}

        {type === 'radio' && <RadioInput {...inputParams} onChange={onChangeValue} />}
        
    </label>)
}