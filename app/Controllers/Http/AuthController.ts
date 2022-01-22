// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import admin from "App/Models/admin"
import SignupValidator from 'App/Validators/SignupValidator'

export default class AuthController {
    public async index ({}){
        return admin.all()
    }
    public async signup({ request, response, auth }){
       await request.validate(SignupValidator)
      const params = request.body()
  
      try{
  
        // create the admin/user
        await admin.create({
          email: params.email,
          password: params.password
        })
  
        // sign in the user
        await auth.use('api').attempt(params.email, params.password)
        return response.status(201).created('created')// also a status called send  u can use it
      }catch(error){
        console.log(error)
      }
    }

    public async login({request, response, auth}){
      const email = request.input('email')
      const password = request.input('password')
    
      try {
        const token = await auth.use('api').attempt(email, password)
        return token
      } catch {
        return response.badRequest('Invalid credentials')
      }
    }
}
