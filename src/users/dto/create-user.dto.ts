import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
  @ApiProperty({example: "kartashik@gmail.com", description: 'email пользователя'})
  @IsString({message: "Должно быть строкой"})
  @IsEmail({},{message: "Некорректный email"})
  readonly email: string;
  @ApiProperty({example: "qwerty", description: 'Пароль пользователя'})
  @IsString({message: "Должно быть строкой"})
  @Length(4, 16, {message: "Пароль должен быть не меньше 4 и не больше 16 символов"})
  readonly password: string;
}