import FilmController from "./film-controller"
import ImageController from "./image-controller"

export default class ControllerMain{
    private nivel: number
    constructor(nivel: number){
        this.nivel = nivel
    }

    async execute(callback:Function){
        const film_controller = new FilmController(this.nivel)
        let url = film_controller.url(this.nivel)
        const film = await film_controller.scrap(url)

        const image_controller = new ImageController(film)
        url = image_controller.url(film.id)
        const image = await image_controller.scrap(url)

        callback(image)


    }
}