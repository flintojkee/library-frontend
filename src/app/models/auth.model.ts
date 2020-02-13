import { IUser } from './user.model';

export interface IUserLogin extends IUser {
  accessToken: string;
}
