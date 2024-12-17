import express,{json} from 'express';
import { certiroute } from './Routes/certiroute.js';
const app =express();

app.use(json());
app.use('/',certiroute);

const port=8000;
app.listen(port,()=>{
    console.log(`server listen to the ${port}`)
})