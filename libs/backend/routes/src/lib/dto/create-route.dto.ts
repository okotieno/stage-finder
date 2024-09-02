import { IsString, IsNumber, IsArray, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class SaccoDto {
  @IsString()
  name?: string;
}

class LocationDto {
  @IsString()
  name?: string;

  @IsNumber()
  lat?: number;

  @IsNumber()
  lng?: number;
}

export class CreateRouteDto {
  @IsString()
  name?: string;

  @ValidateNested()
  @Type(() => LocationDto)
  source?: LocationDto;

  @ValidateNested()
  @Type(() => LocationDto)
  terminus?: LocationDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationDto)
  stops?: LocationDto[];

  @IsNotEmpty()
  @ValidateNested()
  sacco?: SaccoDto;
}
