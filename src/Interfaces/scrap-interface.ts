import ScrapModel from "../Models/scrap-models";

export default interface IScrap{
    run: (url: string, classe:string) => Promise<ScrapModel>
    sorteio:(value:number) => number
}