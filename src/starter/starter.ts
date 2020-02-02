export interface User {
    id: string
    name: string
}

export enum LoadingStatus {
    INIT,
    DONE,
    FAIL,
}

export interface ApiError {
    code: number
    message: string
}