import ScrapModel from "../Models/scrap-models";
import ScrapController from "./scrap-controller";

export default class PageWebController{
    private scrap_contorller = new ScrapController()
    
    protected async get(url:string, classe: string){
        const elements = (await this.scrap_contorller.run(url, classe)).html;
        const indice = this.scrap_contorller.sorteio(elements.length);
        return elements[indice]
        
    }
}