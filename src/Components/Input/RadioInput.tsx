import cn from 'classnames';

export const RadioInput: React.FC<{ 
    options: string[];
    className? :string | {
        [className: string]: boolean,
    };
    value: string;
    onChange?: (v: number) => void;
}> = ({ options, className, value, onChange }) => {

    return (<section className={cn('Input__field', className)}>
        {options.map((option, key) => (
            <article 
                className={cn('Input__option', {
                    'Input__option--selected': key === +value
                })}
                key={key}
                onClick={() => onChange && onChange(key)}
            >
                {option}
            </article>
        ))}
    </section>)
}