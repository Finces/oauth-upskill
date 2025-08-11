import { Request, Response } from 'express';

export function home(request: Request, response: Response): void {
  response.render('index', {
    title: '2137',
    message: 'Home page',
  });
}
