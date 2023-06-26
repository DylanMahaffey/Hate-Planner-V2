import { IUser } from './../Models/User.model';
import { users } from './Users.mock';
import { Guid } from "guid-typescript";

export function GetLoginUser(u: IUser){
    const user: IUser | undefined = users.find(x => x.Email === u.Email)
    if(!user)
        return null;
    
    if(user.Password !== u.Password)
        return null;

    return user;
}

export function RegisterUser(u: IUser): IUser {
    const guid: string = Guid.create().toString();
    u.UserId = guid;
    users.push(u);

    return u;
}