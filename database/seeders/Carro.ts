import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Carro from 'App/Models/Carro'

export default class extends BaseSeeder {
  public async run () {
  
    await Carro.createMany([
      {potencia: '300', ano: 2022, cor:'vermelho', placa: '305A-34', modeloId: 3},
      {potencia: '100', ano: 2022, cor:'prateado', placa: '4545-gt', modeloId: 2},
      {potencia: '300', ano: 2002, cor:'preto', placa: 'ABC12345', modeloId: 1},
      {potencia: '100', ano: 2015, cor:'dourado', placa: 'tyb', modeloId: 4}
    ])


  }
}
