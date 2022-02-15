import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly last_name: string;

  @IsString()
  @IsNotEmpty()
  readonly type_document: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly number_document: string;

  @IsString()
  @MinLength(8)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsString()
  @IsOptional()
  readonly createByUserId: string;

  @IsString()
  @IsOptional()
  readonly updateByUserId: string;
}
