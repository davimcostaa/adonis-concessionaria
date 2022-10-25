import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
