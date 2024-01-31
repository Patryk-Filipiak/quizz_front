import axios from "axios";
interface AccountData {
    username: string;
    flags: number;
}

const BASE_URL: string = 'http://localhost/api/auth';

export abstract class AuthApi {
    static check = async ():Promise<{ data: AccountData}> => axios.get(BASE_URL, {
        withCredentials: true,
    });
 
    static login = async (username: string, password: string):Promise<{ data: AccountData}> => { 
        return axios.post(`${BASE_URL}/login`, {
            username, password
        }, {
            withCredentials: true,
        })
    }

    static singup = async (username: string, password: string, email: string):Promise<{ data: AccountData}> => { 
        return axios.post(`${BASE_URL}/singup`, {
            username, password, email
        }, {
            withCredentials: true,
        })
    }

    static logout = async () => axios.post(`${BASE_URL}/logout`, {}, {
        withCredentials: true,
    });
} 
