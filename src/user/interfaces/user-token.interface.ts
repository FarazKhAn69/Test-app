export interface UserTokenInterface {
    token: string;
    expiredAt: Date;
    userId?: string;
}