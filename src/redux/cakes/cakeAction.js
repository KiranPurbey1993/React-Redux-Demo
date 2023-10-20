import { BUY_CAKE } from './cakeType';

// action creator function 
export const buyCake = (number=1)=>{
    return {
        type:BUY_CAKE,
        payload:number

    }
}