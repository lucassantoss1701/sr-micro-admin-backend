import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.inteface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger(AppController.name)


  @EventPattern("criar-categoria")
  async criarCategoria(@Payload() categoria: Categoria){
    this.logger.log(`[micro-admin-backend] categoria ${JSON.stringify(categoria)}`)
    await this.appService.criarCategoria(categoria);
  }


    
  @MessagePattern("consultar-categorias")
  async consultarCategorias(@Payload() _id: string){
    if(_id){
      return await this.appService.consultarCategoriaPeloId(_id)
    }else{
      return await this.appService.consultarCategoria();
    }
  }

  

}
