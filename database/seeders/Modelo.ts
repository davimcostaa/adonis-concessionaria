import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Modelo from 'App/Models/Modelo'

export default class extends BaseSeeder {
  public async run () {
    
    await Modelo.createMany([
      {nome: '147', marcaId: '1'},
      {nome: 'gty', marcaId: '2'},
      {nome: 'htu', marcaId: '3'},
      {nome: 'dhy67', marcaId: '4'},
    ])

  }
}
