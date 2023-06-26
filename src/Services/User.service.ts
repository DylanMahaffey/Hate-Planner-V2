import { IUser } from "../Models/User.model";

let CurrentUser: IUser = {}

export default function GetCurrentUser(): IUser {
    return CurrentUser;
};

export function SetCurrentUser(user: IUser): void {
    CurrentUser = user;
}

export function IsLoggedIn(): boolean {
    return CurrentUser.UserId === undefined;
}