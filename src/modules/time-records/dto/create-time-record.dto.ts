import {
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreateTimeRecordDto {
  @IsString()
  @IsOptional()
  readonly observations: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly projectId: string;

  @IsString()
  @IsNotEmpty()
  readonly costCenterId: string;

  @IsDate()
  readonly dateStart: Date;

  @IsDate()
  readonly dateEnd: Date;

  @IsString()
  readonly status: string;

  @IsBoolean()
  readonly discount_lunch: boolean;

  @IsString()
  @IsOptional()
  readonly createByUserId: string;

  @IsString()
  @IsOptional()
  readonly updateByUserId: string;
}
