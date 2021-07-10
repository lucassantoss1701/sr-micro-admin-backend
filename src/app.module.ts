import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaSchema } from './interfaces/categorias/categora.schema';
import { JogadorSchema } from './interfaces/jogadores/jogador.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:930a2e.l@cluster0.06cge.mongodb.net/sradmbackend?retryWrites=true&w=majority', 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    MongooseModule.forFeature([
      {name: "Categoria", schema: CategoriaSchema},
      {name: "Jogador", schema: JogadorSchema}
    ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}