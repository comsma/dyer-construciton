import {UserType} from "@/types/user";

export interface AvailableUser{
    id: number,
    username: string
}
export interface JobData {
    data: [{
        id: number;
        name: string;
        city: string;
        state: string;
        users: [UserType];
        documents: [JobDocument]
    }]

}


export interface JobDocument {
    id: number,
    title: string,
    name: string,
}
