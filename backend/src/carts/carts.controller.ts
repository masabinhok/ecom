import { Body, Controller, Post, Req } from '@nestjs/common';
import { CartsService } from './carts.service';
import { AddToCartDto } from './dtos/add-to-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  async addToCart(@Req() request: Request, @Body() addToCartDto: AddToCartDto){
    const user = request['user']
    return this.cartsService.addToCart(
      user.sub,
      addToCartDto
    )
  }
}
