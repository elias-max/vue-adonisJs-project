import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  IncomeType from "App/Models/IncomeType"

export default class IncomeTypesController {
    public async index({}: HttpContextContract) {
      return IncomeType.all
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response,auth}: HttpContextContract) {
    try {
      await    IncomeType.create({
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
    const incometype = await  IncomeType.findOrFail(params.id); 
    return incometype 
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params}: HttpContextContract) {
    const incometype = await  IncomeType.findOrFail(params.id);
    incometype?.delete();
  }
}
