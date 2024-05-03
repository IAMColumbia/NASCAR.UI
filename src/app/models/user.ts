export class User{
    ID: number = 0;
    Username: string = "";
    Type: string = "player";
    Avatar: number = 0;

    constructor(id:number, username: string, type: string, avatar: number){
        this.ID = id;
        this.Username = username;
        this.Type = type;
        this.Avatar = avatar;

    }
}