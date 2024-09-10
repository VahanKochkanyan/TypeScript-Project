export interface IUser {
    id: number
    name: string
    age: number
    salary: number
    isMaried?: boolean
}

export interface IContext {
    users: IUser[]    
    removeUser: (id: number) => void
    handleAddUser: (users: IUser) => void
}

export type NewUser = Omit<IUser, "id">