import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginUserDto} from "./dto/login-user.dto";
import {Response} from "express";

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    teset()
    {
        return '123'
    }

    @Post('/registration')
    post_registration(@Body() createUserDto: CreateUserDto) {
        let token = this.authService.create(createUserDto)
        //res.cookie('jwt', token);
        return token;
    }

    @Post('/login')
    post_login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
        let token = this.authService.login(loginUserDto);
        res.cookie('jwt', token);
        return token;
    }
}
