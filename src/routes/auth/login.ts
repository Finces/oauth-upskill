import { Request, Response } from 'express';

export function login(request: Request, response: Response): void {
  response.render('login', {
    title: '2137',
  })
}