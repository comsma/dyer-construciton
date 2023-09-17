export interface User {
    id: number;
    company: string;
    username: string;
    has_view_documents: boolean,
    has_modify_documents: boolean,
    has_modify_gallery: boolean,
    has_admin: boolean
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
