import {UserType} from "@/types/user";

export interface Job {
    id: number;
    name: string;
    city: string;
    state: string;
    users: [UserType];
}

export interface JobDocument {
    id: number,
    title: string,
    name: string,
}
