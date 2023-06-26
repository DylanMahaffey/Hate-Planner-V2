import { RegisterUser, GetLoginUser } from "../MockData/Services.mock";
import { IUser } from "../Models/User.model";
import { SetCurrentUser } from "./User.service";

export function UserLogin(user: IUser): boolean {
    const loggedInUser: IUser | null = GetLoginUser(user);
    if(!loggedInUser)
        return false;
    
    SetCurrentUser(loggedInUser);

    return true;
}

export function Register(user: IUser): boolean {
    try {
        user = RegisterUser(user);
        SetCurrentUser(user);
        return true;
    } catch {
        return false;
    }
}