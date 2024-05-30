import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ms_product',
      username: 'postgres',
      password: '1234', // Change credentials if you clone the repo
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // DO NOT USE IN PRODUCTION
    }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
