import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Expense from "App/Models/Expense"

export default class ExpensesController {
  public async index({}: HttpContextContract) {
      return Expense.all
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response,auth}: HttpContextContract) {
    try {
      await  Expense.create({
        name:request.input('name'),
        amount:request.input('amount'),
        date:request.input('date'),
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
    const expense = await  Expense.findOrFail(params.id); 
    return expense 
  }

  public async edit({}: HttpContextContract) {}

  public async update({response,request,params,auth}: HttpContextContract) {
    const expense = await  Expense.findOrFail(params.id)
    expense.name =request.input('name')
    expense.amount = request.input('amount')
    expense.date = request.input('date')
    expense.save();
   return response.status(202).send(expense);
  }

  public async destroy({params}: HttpContextContract) {
    const expense = await   Expense.findOrFail(params.id);
    expense?.delete();
  }
}
