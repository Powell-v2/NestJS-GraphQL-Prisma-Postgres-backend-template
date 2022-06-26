import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return [{ name: 'Stephen' }];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(updateUserInput: UpdateUserInput) {
    return `This action updates a #${updateUserInput.id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}