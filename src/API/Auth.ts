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
 
      static login = async (username: string, password: string):Promise<{ data: AccountData}> => axios.post(`${BASE_URL}/login`, {
        username, password
    }, {
        withCredentials: true,
    })

    static changePassword = async (newPassword: string, oldPassword: string) => axios.patch('http://localhost/auth/password', {
        newPassword, oldPassword
    }, {
        withCredentials: true,
    })

    static logout = async () => axios.post('http://localhost/auth/logout', {}, {
        withCredentials: true,
    });
}

// Add more methods here
