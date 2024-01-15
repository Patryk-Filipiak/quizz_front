import { useState } from 'react';
import './Input.scss';
import { RadioInput } from './RadioInput';

interface Props {
    type?: 'text' | 'password' | 'textarea' | 'category' | 'radio' | 'email';
    title: string;
    options?: string[]
    value?: string;
}

export const Input: React.FC<Props> = ({ 
    type = 'text',
    title,
    options = [],
    value = ''
}) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const inputParams = {type, value: inputValue, options}

    return (<label className="Input">
        <p className="Input__title">
            {title}
        </p>
        {['text', 'password', 'email'].includes(type) && <input className="Input__field" {...inputParams} onChange={(e) => setInputValue(e.target.value)} />}
        {type === 'textarea' && <textarea className='Input__field' {...inputParams} onChange={(e) => setInputValue(e.target.value)} />}
        {type === 'radio' && <RadioInput {...inputParams} onChange={(opt: number) => setInputValue('' + opt)} />}
        
    </label>)
}