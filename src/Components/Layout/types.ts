import { ReactNode } from "react";

export type SetParams = (params: { [key: string]: string }) => void;
export type UseParam = () => SetParams;
export type DependsFunction = (node: ReactNode, dependencies?: boolean[]) => DependsFunction;

export interface ContentType {
    Page: React.FC<{
        className?: string;
        children?: ReactNode;
    }>;

    Param: React.FC<{
        children?: ReactNode;
        selector: string;
    }>;

    Tab: React.FC<{
        children?: ReactNode;
        id: string;
    }>;

    Tabs: React.FC<{
        children?: ReactNode; 
        selected?: string;
    }>; 

    useParam: UseParam;
    depends: () => [DependsFunction, () => ReactNode[]];
}