import { Request, Response } from 'express';

export function login(request: Request, response: Response): void {
  response.render('index', {
    title: '2137',
    message: 'Login page',
  })
}