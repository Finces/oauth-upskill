import { Request, Response } from 'express';

export function callback(request: Request, response: Response): void {
  response.render('index', {
    title: '2137',
    message: 'Callback page',
  })
}