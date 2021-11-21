import express from 'express';
import ControllerMain from './Controllers/controller-main';

const app = express();
const port = 3000;

app.get('/imagem', (req, res) => {
//const nivel = req.headers.nivel || '1';
//const nivel = '1'
const nivel = req.url.split('nivel=')[1]
const controller = new ControllerMain(nivel)
controller.execute((image)=>{
    res.send(image);
})


});

app.listen(port, () => {});