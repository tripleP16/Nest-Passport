import {PassportStrategy} from "@nestjs/passport";  
import {Strategy, VerifyCallback} from 'passport-google-oauth20';
import {Injectable} from "@nestjs/common"; 
import { Verify } from "node:crypto";

@Injectable()

export class GoogleStrategy extends PassportStrategy (Strategy, 'google'){
    constructor(){
        super({
            clientID:"523613295137-8t64me5oj2ufe9nrsb7m906nd1p9h87b.apps.googleusercontent.com", 
            clientSecret:"hBZD5dq29r8tpT4iRlZILnOi", 
            callbackURL:"https://localhost:3000/auth/google/callback", 
            scope:['email', 'profile']
        })
    }

    async validate(accessToken:string, refreshToken:string, profile:any, done:VerifyCallback):Promise<any>{
        const{name, email} = profile
        const user ={
            email:email[0].value, 
            name:name.givenName,
            accessToken
        }
        done(null, user)
    }
}