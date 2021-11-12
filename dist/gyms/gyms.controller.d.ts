import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
export declare class GymsController {
    private readonly gymsService;
    constructor(gymsService: GymsService);
    create(createGymDto: CreateGymDto): Promise<CreateGymDto & import("./entities/gym.entity").Gym>;
    findAll(): Promise<import("./entities/gym.entity").Gym[]>;
    findOne(id: string): Promise<import("./entities/gym.entity").Gym>;
    update(id: string, updateGymDto: UpdateGymDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
