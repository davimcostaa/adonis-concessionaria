import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Carro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public potencia: string

  @column()
  public ano: number

  @column()
  public cor: string

  @column()
  public placa: string

  @column()
  public modeloId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=>Cliente, {pivotTable: 'carro_clientes'})
  public cliente: ManyToMany<typeof Cliente>

}
