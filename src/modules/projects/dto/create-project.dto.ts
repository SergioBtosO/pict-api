import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly code: string;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  readonly user_aprover: string;

  @IsString()
  @IsOptional()
  readonly createByUserId: string;

  @IsString()
  @IsOptional()
  readonly updateByUserId: string;
}
