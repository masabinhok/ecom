import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { User } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService :UsersService, 
    private jwtService: JwtService
  ){}

  async hashPassword(password: string) : Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async signUp(signUpDto: SignUpDto): Promise<User | null>{
    const {email, password, name } = signUpDto;
    const user = await this.usersService.findOne(email);

    if(user){
      throw new Error('User Already Exists');
    }

    const hash = await this.hashPassword(password);
    return this.usersService.createUser({
      name, email, password: hash
    });
  }

  async signIn(signInDto: SignInDto): Promise<{
    access_token: string
  }> {
    const {email, password} = signInDto;
    const user = await this.usersService.findOne(email);

    if(!user){
      throw new Error('No user with this email exist. Please SignUp if you are a new user.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id, 
      email: user.email,
      name: user.name,
    }

    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
