import { Injectable } from '@nestjs/common';
import { CartItem, WishlistItem } from 'generated/prisma';
import { CartsService } from 'src/carts/carts.service';
import { AddToCartDto } from 'src/carts/dtos/add-to-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistsService {
  constructor(private prisma: PrismaService, 
    private cartsService: CartsService
  ){}

  async addToWishlist(userId: number, productId: number){
    // check is wishlist exists or not?
    let wishlist = await this.prisma.wishlist.findUnique({
      where: {
        userId
      },
      include: {
        items: true,
      }
    });


    // if no wishlist, create one,
    if(!wishlist){
      wishlist = await this.prisma.wishlist.create({
        data: {
          userId,
        },
        include: {
          items: true,
        }
      })
    }

    const existingItem = await this.prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId
      }
    })

    if(existingItem){
      throw new Error('Item already in wishlist!');
    }

    return this.prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId,
      }
    });
  }

  async removeFromWishlist(wishlistItemId: number): Promise<WishlistItem>{
      const updatedWishlist = await this.prisma.wishlistItem.delete({
          where: {
            id: wishlistItemId
          }
      });
      if(!updatedWishlist){
        throw new Error('Item not found!')
      }
      return updatedWishlist;
  }

  async moveOneItemToCart(userId: number, wishlistItemId: number, addToCartDto: AddToCartDto): Promise<CartItem>{
    await this.removeFromWishlist(wishlistItemId);
    return this.cartsService.addToCart(userId, addToCartDto);
  }

}
