export type UserType = {
    id: number,
    username: string,
    company: string,
    hasViewDocuments: boolean,
    hasModifyDocuments: boolean,
    hasModifyGallery: boolean,
    hasAdmin: boolean
    jobs: [UserJob]
}

export type UserJob = {
    id: number,
    name: string,
}
