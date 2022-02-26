import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {DialogsService} from "./dialogs.service";
import {NewMessageDto} from "./dto/new-message.dto";
import {MessagesService} from "../messages/messages.service";
import {GetMessagesDto} from "./dto/get-messages.dto";
import {Request} from "express";

@Controller('im')
export class DialogsController {
    constructor(
        private readonly dialogsService: DialogsService,
        private readonly messagesService: MessagesService
    ) {}


    @Get('/id/:dialog_id') // getting messages from dialog by id
    get_all_messages(@Param() getMessagesDto: GetMessagesDto, @Req() req: Request) {
        let result = this.messagesService.GetAllMessagesFromDialogById(getMessagesDto.dialog_id)
        return result;
    }

    @Post('/nm') // new message to dialog by id
    add_new_message(@Body() newMessageDto: NewMessageDto, @Req() req: Request)
    {
        let result = this.messagesService.AddNewMessageToDialogById(newMessageDto.dialog_id, newMessageDto.msg_text)
        return result
    }

    @Post('/test')
    testfun(@Req() req: Request)
    {
        //console.log(req.cookies);
        return req.cookies.jwt
    }


}
