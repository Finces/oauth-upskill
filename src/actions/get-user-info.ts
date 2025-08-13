export async function getUserInfo(accessToken: string): Promise<any> {
  const userInfoResponse = await fetch('https://dev-4m7httpww4jgg4ey.us.auth0.com/userinfo', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
  });

  return userInfoResponse.json();
}