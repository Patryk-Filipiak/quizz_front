export interface CategoryState {
    loading: boolean; 
    exhausted: boolean;
    current: CategoryData | null;
    questions: QuestionData[] | null;
}
 

export type CategoryData = {
    id: number | null,
    title: null | null,
    slug: null | null,
    parent: CategoryData | null,
    subcategories: CategoryData[];
}

export type QuestionData = {
    id: number;
    title: string;
    difficultyLevel: number;
};