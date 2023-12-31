import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';


@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @CacheKey('some_route')
  // @CacheTTL(60)
  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
