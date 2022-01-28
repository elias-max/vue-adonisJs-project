import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Members extends BaseSchema {
  protected tableName = 'members'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('phonenumber')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
