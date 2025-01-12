import authenticationService, { SignInParams } from '@/services/authentication-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  const result = await authenticationService.signIn({ email, password });

  res.status(httpStatus.OK).send(result);
}

export async function githubSignIn(req: Request, res: Response) {
  const code = req.body.code;

  const result = await authenticationService.oauthSignIn(code);

  res.status(httpStatus.OK).send(result);
}
