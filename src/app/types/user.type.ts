export interface IUserLogin{
    username: string;
    email: string;
    password: string;
}

export type UserLogin = {
    type: "LOGIN_SUCCESS" | "LOGIN_FAILURE" | "NOT_LOGGEDIN";
    data: any
}