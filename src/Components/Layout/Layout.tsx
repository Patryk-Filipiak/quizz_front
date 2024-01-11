import { AppLayout } from './AppLayout';
import { AppLayoutTemplate, TabLayoutTemplate } from './types';
import './Layout.scss';

export const Layout: React.FC<{
    theme?: 'row' | 'column' | 'app' | 'tab';
    children?: React.ReactNode;
    template?: AppLayoutTemplate | TabLayoutTemplate;
    className?: string;
}> = ({
    theme='row', 
    className,
    template
}) =>  (<section
        className={`Layout Layout--${theme}${className ? ' ' + className : ''}`}
    >
        {theme === 'app' && <AppLayout
            className={className}
            {...(template as AppLayoutTemplate)}
        />}

    </section>)