import { Injectable } from "@nestjs/common";
import { SuccessResponse } from "src/lib/helpers/response-formatter";
import { UserType } from "src/types/UserType";


@Injectable()
export class UserService {
  constructor() {}

  private users: UserType[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async getAllUsers(): Promise<UserType[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<UserType | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<UserType | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(user: UserType): Promise<UserType> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  async updateUser(id: number, user: UserType): Promise<UserType | undefined> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      return undefined;
    }
    this.users[index] = user;
    return user;
  }

  async deleteUser(id: number): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
  }

}