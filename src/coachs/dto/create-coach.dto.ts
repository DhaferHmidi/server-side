import {User} from '../../user/entities/user.entity'

export class CreateCoachDto { 
    coachName: string; 
    rating: number; 
    price: number;
    description: string;
    adress: string; 
    adherent : User[]; 
    phoneNumber : number; 
    email : string; 
    imageUrl : string;
}
