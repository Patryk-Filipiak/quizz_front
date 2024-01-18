import axios from "axios";
interface AccountData {
    username: string;
    flags: number;
}

const BASE_URL: string = 'http://localhost/api/auth';

export enum FLAGS {
    'IS_ACTIVE' = 1,
    'CAN_SEE_PANEL' = 2,
}

export abstract class AuthApi {
    static check = async ():Promise<{ data: AccountData}> => axios.get(BASE_URL, {
        withCredentials: true,
    });
 
    static login = async (username: string, password: string):Promise<{ data: AccountData}> => {
        console.log('Proba logina:', username, password)
        return axios.post(`${BASE_URL}/login`, {
            username, password
        }, {
            withCredentials: true,
        })
    }

    static logout = async () => axios.post(`${BASE_URL}/logout`, {}, {
        withCredentials: true,
    });

    static changePassword = async (newPassword: string, oldPassword: string) => axios.patch('http://localhost/auth/password', {
        newPassword, oldPassword
    }, {
        withCredentials: true,
    })
}

// Add more methods here
