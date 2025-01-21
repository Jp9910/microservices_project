import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript and a change' })
})

app.use(route)

app.listen(3333, () => 'server running on port 3333')


// https://dev.to/rogeriorioli/iniciando-um-projeto-nodejs-express-com-typescript-4bfl
