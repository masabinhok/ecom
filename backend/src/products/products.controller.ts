import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(){
    return this.productsService.findAll();
  }

  @Get(':category')
  async findByCategory(@Param('category') category: string){
    return this.productsService.findByCategory(category);
  }
}
