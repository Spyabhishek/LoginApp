import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

/** Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 8080;

dotenv.config();



/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

/** API routes */
app.use('/api', router)

/** start server only when we have valid connection*/

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server connected to http://localhost:${port}`)
        });

    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log('Invalid Database Connection...')
})

