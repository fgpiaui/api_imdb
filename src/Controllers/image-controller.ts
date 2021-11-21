import IPageWeb from "../Interfaces/page-web-interface";
import FilmModel from "../Models/film-models";
import ImageModel from "../Models/image-models";
import PageWebController from "./page-web-controller";

export default class ImageController extends PageWebController implements IPageWeb{
    private film: FilmModel
    private classe = '.media_index_thumb_list img'
    constructor (film: FilmModel){
        super()
        this.film = film
    }   
    
    async scrap(url: string): Promise<ImageModel>{
        const element = await this.get(url, this.classe)
        const image: ImageModel = {
            titulo: this.film.titulo,
            id: this.film.id,
            nivel: this.film.nivel,
            imagem:(element.attribs.src).split('UY100_')[0]+'FM.jpg'

        }
        return image
    }
    url(valor: number | string): string{
        return `https://www.imdb.com/title/${valor}/mediaindex?refine=still_frame&ref_=ttmi_ref_sf`
    }
}