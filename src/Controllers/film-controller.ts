import IPageWeb from "../Interfaces/page-web-interface";
import FilmModel from "../Models/film-models";
import ImageModel from "../Models/image-models";
import PageWebController from "./page-web-controller";

export default class FilmController extends PageWebController implements IPageWeb{
    private nivel: string
    private classe = '.lister-item-header a'
    constructor (nivel: string){
        super()
        this.nivel = nivel        
    }   
    
    async scrap(url: string): Promise<FilmModel>{
        const element = await this.get(url, this.classe)
        const film: FilmModel = {
            titulo: element.children[0].data,
            id: element.attribs.href.split('/')[2],
            nivel: this.nivel,
        }
        return film
    }
    url(valor: string): string{
        return `https://www.imdb.com/search/title/?title_type=feature&release_date=1900-01-01,2020-12-31&count=50&start=${valor}&ref_=adv_nxt`
    }
}