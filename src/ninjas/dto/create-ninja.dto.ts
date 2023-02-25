import { IsEnum, MinLength } from 'class-validator';
export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'stick'], { message: 'use correct weapon!' })
  weapon: 'stars' | 'stick';
}
