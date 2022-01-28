import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class IncomeTypes extends BaseSchema {
  protected tableName = 'income_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
