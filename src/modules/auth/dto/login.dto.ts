import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  readonly type_document: string;

  @IsString()
  @IsNotEmpty()
  readonly number_document: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
