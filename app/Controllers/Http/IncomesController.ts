import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Income from "App/Models/Income"

export default class IncomesController {
    public async index({}: HttpContextContract) {
      return Income.all
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response,auth}: HttpContextContract) {
    try {
      await  Income.create({
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
    const income = await  Income.findOrFail(params.id); 
    return income 
  }

  public async edit({}: HttpContextContract) {}

  public async update({response,request,auth,params}: HttpContextContract) {
    const income = await  Income.findOrFail(params.id)
    income.name =request.input('name')
    income.amount = request.input('amount')
    income.date = request.input('date')
    income.save();
   return response.status(202).send(income);
  }

  public async destroy({params}: HttpContextContract) {
    const income = await   Income.findOrFail(params.id);
    income?.delete();
  }

}
