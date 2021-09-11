/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
    @IsString()
    readonly text: string;
    @IsString()
    readonly date: any;
    @IsNumber()
    readonly senderId: number;
    @IsNumber()
    readonly chatId: number;
}

