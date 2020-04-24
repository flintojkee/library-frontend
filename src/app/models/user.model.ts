import { UserRoles } from './enums/user-roles.enum';

export interface IUser {
  id: number;
  email: string;
  fullName: string;
  address: string;
  dateOfBirth: Date | string;
  roles: UserRoles[];
  accessToken: string;
}