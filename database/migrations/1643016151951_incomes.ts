import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Incomes extends BaseSchema {
  protected tableName = 'incomes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('income_type_id').references('income_type')
      table.decimal('amount').notNullable()
      table.date('date')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
