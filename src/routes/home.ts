import { Request, Response } from 'express';
import { user } from '../data/user';

export function home(request: Request, response: Response): void {
  response.render('index', {
    title: '2137',
    user: user,
  });
}
