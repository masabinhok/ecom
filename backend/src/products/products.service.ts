import { Injectable } from '@nestjs/common';
import { Category, Product } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async findByCategory(category: string): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          name: category,
        }
      },
      include: {
        category: true,
      }
    });
    return products;
  }

}

