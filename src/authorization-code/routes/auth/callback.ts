import { Request, Response } from 'express';
import { exchangeAuthorizationCode } from '../../actions/exchange-authorization-code';
import { getUserInfo } from '../../actions/get-user-info';
import { user } from '../../data/user';

export async function callback(request: Request, response: Response): Promise<void> {
  const code = request.query.code as string;

  const auth0ResponseBody = await exchangeAuthorizationCode(code);
  const userInfo = await getUserInfo(auth0ResponseBody.access_token);

  user.isLoggedIn = true;
  user.name = userInfo.name;
  user.avatar = userInfo.picture;

  response.redirect('/home');
}