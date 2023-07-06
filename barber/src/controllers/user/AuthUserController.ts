import { Request, Response  } from "express";
import { AuthuUserService } from "../../services/user/AuthUserService";

class AuthUserController{
  async handle(request: Request, response: Response){
    const { email, password } = request.body;

    const authUserService = new AuthuUserService();

    const session = await authUserService.execute({
      email, password
    })

    return response.json(session);
  }
}

export { AuthUserController }