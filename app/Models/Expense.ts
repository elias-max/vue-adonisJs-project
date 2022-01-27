import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public  expense_type_id: number

  @column()
  public name: string

  @column()
  public amount: number

  @column()
  public date: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
