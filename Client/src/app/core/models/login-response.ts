import { User } from './user';

export interface LoginResponse {
  data: User;
  token: string;
}
