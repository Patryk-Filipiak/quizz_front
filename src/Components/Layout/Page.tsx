import { ReactNode } from "react";

export const Page: React.FC<{
    children?: ReactNode;
    className?: string;
}> = ({ className, children }) => {

    return <main className={"App__page " + className}>
        { children }
    </main>;
}