import { Injectable } from '@nestjs/common';
import { CartItem, } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from './dtos/add-to-cart.dto';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService){}

  async addToCart(userId: number, addToCartDto: AddToCartDto): Promise<CartItem>{
    const{productId, quantity, priceAtAddition} = addToCartDto;
    //check if the cart exists for the user
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: true }
    });
  
    // if cart doesnot exist, create a new one.
    if (!cart) {
      cart = await this.prisma.cart.create({
        data: { userId },
        include: {
          items: true,
        }
      });
    }

    // check for existing item in cart
    const existingItem = await this.prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId
      }
    })

  // xa vane ta just quantity increase garnu paryo
    if(existingItem){
      await this.prisma.cartItem.update({
      where: {
       id: existingItem?.id,
      },
      data: {
        quantity,
        priceAtAddition
      }
    })
    };

    return this.prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity, 
        priceAtAddition
      }
    })



  }

  

}
