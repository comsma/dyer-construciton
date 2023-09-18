export interface User {
    data: [{
        jobs: [UserJob]
    }]
}
export interface UserJob {
    id: number,
    name: string,
    city: string,
    state: string,
    documents: [UserJobDocument]
}

export interface UserJobDocument {
    id: number,
    title: string
}
