import express from 'express';
import ControllerMain from './Controllers/controller-main';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
//const nivel = parseInt(req.headers.nivel)
const nivel = 1;
const controller = new ControllerMain(nivel)
controller.execute((image)=>{
    res.send(image);
})


});

app.listen(port, () => {});