import { IsString, IsUrl, Max, Min } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    name: string;
    @IsString()
    musician: string;
    @Min(2010)
    @Max(2021)
    year: number;
    @IsString()
    @IsUrl()
    urlImage: string;
}
