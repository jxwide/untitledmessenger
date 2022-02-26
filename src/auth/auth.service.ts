import {Model, Promise} from "mongoose";
import {Injectable, Res} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { JwtService } from '@nestjs/jwt';
import {User, UserDocument} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto"


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) {}

    async create(createUserDto: CreateUserDto) {
        try {
            const candidate = await this.userModel.findOne({email: createUserDto.email}).exec()
            if (!candidate)
            {
                const createdUser = new this.userModel(createUserDto)
                let token = this.generateToken({email: createdUser.email, password: createdUser.password})
                await createdUser.save()
                return token
            } else throw new Error('User already exists!')
        } catch (e) {
            return e.message
        }
    }

    async login(loginUserDto: LoginUserDto) {
        try {
            const candidate = await this.userModel.findOne({email: loginUserDto.email}).exec()
            if (candidate) {
                if (loginUserDto.password == candidate.password)
                {
                    let token = this.generateToken({email: candidate.email, password: candidate.password})
                    return token;
                } else throw new Error('Проверьте введенные данные');
            } else throw new Error('Проверьте введенные данные');
        } catch (e) {
            return e.message
        }
    }

    async generateToken(payload) {
        return this.jwtService.sign(payload)
    }
}
