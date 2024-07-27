import { verify } from 'jsonwebtoken';

require('dotenv').config();

export function verifyToken(token: string){
    const secret: string | undefined = process.env.JWT_SECRET;
    if(!secret){
        throw new Error('JWT_SECRET not defined')
    }
    const decode = verify(token, secret);
    return decode;
}
