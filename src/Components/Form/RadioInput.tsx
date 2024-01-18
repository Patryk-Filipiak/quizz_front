import { useState } from 'react';
import cn from 'classnames'; 

export const RadioInput: React.FC<{ 
    options: string[];
    className? :string | {
        [className: string]: boolean,
    };
    value: string;
    onChange?: (v: string) => void;
}> = ({ options, className, value, onChange }) => {

    const [selected, setSelected] = useState<number>(Number(value) || 0);
    const onChangeValue = (v: string) => {
        if (onChange) onChange(String(v))
        setSelected(Number(v))
    } 

    return (<section className={cn('Input__field', className)}>
        {options.map((option, key) => (
            <article 
                className={cn('Input__option', {
                    'Input__option--selected': key === selected
                })}
                key={key}
                onClick={() => onChangeValue(String(key))}
            >
                {option}
            </article>
        ))}
    </section>)
}