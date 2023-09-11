import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola Mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${ port }`);
});
