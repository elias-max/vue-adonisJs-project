import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddNameToExpenses extends BaseSchema {
  protected tableName = 'expenses'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
    })

    }

}
