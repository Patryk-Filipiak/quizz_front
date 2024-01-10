import cn from 'classnames';

export const AppLayout: React.FC<{
    header?: React.ReactNode | null;
    main?: React.ReactNode | null;
    footer?: React.ReactNode | null;
    className?: string;
}> = ({
    className, header, main, footer
}) => { 
    return (<>
        <header className={cn('Layout__app-header', {
            [className + '__header']: !!className
        })}>
            {header}
        </header>

        <main className={cn('Layout__app-main', {
            [className + '__main']: !!className
        })}>
            {main}
        </main>

        <footer className={cn('Layout__app-footer', {
            [className + '__footer']: !!className
        })}>
            {footer}
        </footer>
    </>);
}