import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

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
  destinationsServed?: LocationDto[];

  @IsArray()
  @IsString({ each: true })
  saccos?: string[];
}
