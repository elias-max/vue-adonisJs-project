import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExpenseType from "App/Models/ExpenseType"

export default class ExpenseTypesController {
  public async index({}: HttpContextContract) {
      return ExpenseType.all
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    try {
      await   ExpenseType.create({
        description:request.input('description'),
      },)
      return response.status(201).created('created')// also a status called send  u can use it 
    } catch (error) {
      return {
        error: true,
        message: 'verify the properties'
      }
    }
  }

  public async show({params}: HttpContextContract) {
    const expensetype = await  ExpenseType.findOrFail(params.id); 
    return expensetype 
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params}: HttpContextContract) {
    const expensetype = await   ExpenseType.findOrFail(params.id);
    expensetype?.delete();
  }
}
