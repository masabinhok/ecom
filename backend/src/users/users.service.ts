import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { SignUpDto } from 'src/auth/dtos/sign-up.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(signUpDto: SignUpDto): Promise<User | null> {
    const { name, email, password } = signUpDto;
    const user = await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password, //hashed password
      },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }
}
