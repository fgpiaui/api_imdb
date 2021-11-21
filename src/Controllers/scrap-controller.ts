import axios from "axios";
const cheerio = require('cheerio');
import IScrap from "../Interfaces/scrap-interface";
import ScrapModel from "../Models/scrap-models";

export default class ScrapController implements IScrap{
    async run(url: string, classe:string): Promise<ScrapModel>{
        console.log(url)
        const response = await axios.get(url)
        const data = response.data
        const html = cheerio.load(data);
        const scrap: ScrapModel = {
            html:html(classe)
        }
        return scrap

    }
    
    sorteio(value:number):number{
        return Math.floor(Math.random() * value)
    }
}