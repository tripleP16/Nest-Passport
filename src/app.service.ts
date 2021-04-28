import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 googlelogin(req){
   if(!req.user){
     return "There's no user from google"
   }else{
     return {
       message:'Here is the user data from google', 
       user: req.user
     }
   }
 }
}
