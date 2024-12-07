import { Controller, Get, HttpCode, HttpStatus, Param, Res } from "@nestjs/common";
import { get } from "http";
import { SuccessResponse } from "src/lib/helpers/response-formatter";
import { UserService } from "src/services/UserService";
import { UserType } from "src/types/UserType";


@Controller('user')
export class UserControler {
  constructor(private readonly userService: UserService) {}

  @Get()
  // @HttpCode(200)
  async getAllUsers(@Res() res:Response){
    res.status(HttpStatus.OK).json(await this.userService.getAllUsers());
    // return SuccessResponse(await this.userService.getAllUsers());
  }

  @Get(':id')
  async getUserById(@Param('id') id: number){
    const user = await this.userService.getUserById(Number(id));

    if (!user) {
      return {
        statusCode: 404,
        message: 'User not found',
      };
    }else{
      return SuccessResponse(user);
    }
  }

  @Get(':username')
  @HttpCode(200)
  async getUserByUsername(username: string){
    return SuccessResponse(await this.userService.getUserByUsername(username));
  }
}