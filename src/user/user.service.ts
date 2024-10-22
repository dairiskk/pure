import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private db: DbService) { }
  create(user: Prisma.UserCreateInput) {
    return this.db.user.create({ data: user });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.db.user.findFirstOrThrow({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.db.user.update({
      where: { id },   // The `where` clause to find the record by ID
      data: updateUserDto,   // The `data` clause to apply the updates
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
