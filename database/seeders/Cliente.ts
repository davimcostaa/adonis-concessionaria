import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {

    await Cliente.createMany([
      {nome: 'Joaozinho', cpf: '12345678', telefone: '(61) 99435-4966'},
      {nome: 'Pedro', cpf: '56754787', telefone: '(62) 99435-4969'},
      {nome: 'Carlos', cpf: '86745637', telefone: '(62) 7655-4966'},
      {nome: 'Lula', cpf: '56678346', telefone: '(12) 92455-4913'},
    ])
  }
}
