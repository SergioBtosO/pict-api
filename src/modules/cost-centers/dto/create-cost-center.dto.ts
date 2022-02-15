import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateCostCenterDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly code: string;

  @IsString()
  readonly description: string;

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
