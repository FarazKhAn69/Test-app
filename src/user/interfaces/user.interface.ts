export interface UserInterface {
    id?: string;
    fullName: string;
    email: string;
    dateOfBirth: Date;
    isActive?: Boolean;
    password?: string
}