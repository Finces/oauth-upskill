export async function exchangeAuthorizationCode(code: string): Promise<any> {
  const data = new URLSearchParams();

  data.append('grant_type', 'authorization_code');
  data.append('client_id', process.env.OAUTH2_CLIENT_ID as string);
  data.append('client_secret', process.env.OAUTH2_CLIENT_SECRET as string);
  data.append('code', code);
  data.append('redirect_uri', 'http://localhost:8080/auth/callback');

  const auth0Response = await fetch('https://dev-4m7httpww4jgg4ey.us.auth0.com/oauth/token', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });

  return auth0Response.json();
}