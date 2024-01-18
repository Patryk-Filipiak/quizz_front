export interface AccountData {
    username: string;
    flags: number;
}

export interface AccountState {
    loading: boolean;
    isLoggedIn: boolean;
    exhausted: boolean;
    data: AccountData;
}