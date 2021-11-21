import FilmModel from "../Models/film-models";
import ImageModel from "../Models/image-models";

export default interface IPageWeb{
    scrap: (url: string) => Promise<FilmModel | ImageModel>
    url: (valor: number | string) => string
}