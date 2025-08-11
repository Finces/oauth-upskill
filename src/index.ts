import express from 'express';
import { home } from './routes/home';
import { login } from './routes/auth/login';
import { callback } from './routes/auth/callback';

const app = express();

app.set('view engine', 'pug');

app.get('/', home);
app.get('/auth/login', login);
app.get('/auth/callback', callback);

app.listen(process.env.APP_PORT);

console.log(`App runs on port: ${process.env.APP_PORT}`);