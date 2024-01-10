import { AppLayout } from './AppLayout';
import './Layout.scss';

type AppLayoutTemplate = {
    header: React.ReactNode | null;
    main: React.ReactNode | null;
    footer: React.ReactNode | null;

}

type TabLayoutTemplate = {

}

export const Layout: React.FC<{
    theme?: 'row' | 'column' | 'app';
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
            {...template}
        />}

    </section>)