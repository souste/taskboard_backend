export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
}

export type PublicUser = Omit<User, "password">;
