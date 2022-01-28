import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from "App/Models/Member"
import MemberValidator from "App/Validators/MemberValidator"


export default class MembersController {
    public async index ({}){
      return Member.all()
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response,auth}) {
    await request.validate(MemberValidator)
   
    try {
      await Member.create({
        firstName:request.input('firstName'),
        lastName:request.input('lastName'),
        phonenumber:request.input('phonenumber')
      },)
      return response.status(201).created('created')// also a status called send  u can use it 
    } catch (error) {
      return {
        error: true,
        message: 'verify the properties'
      }
    }
   
  }

  public async show({params}) {
    const member = await Member.findOrFail(params.id); 
    return member 
  }
  
  public async edit({}: HttpContextContract) {}

  public async update({ response,auth, request,params }) {
    const member = await Member.findOrFail(params.id)
    member.firstName = request.input('firstName')
    member.lastName = request.input('lastName')
    member.phonenumber = request.input('phonenumber')
    member.save();
   return response.status(202).send(member);
  }
  
  public async destroy ({params}) {
    const member = await  Member.findOrFail(params.id);
    member?.delete();
  }
}
