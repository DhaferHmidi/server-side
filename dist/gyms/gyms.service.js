"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GymsService = void 0;
const common_1 = require("@nestjs/common");
let GymsService = class GymsService {
    create(createGymDto) {
        return 'This action adds a new gym';
    }
    findAll() {
        return `This action returns all gyms`;
    }
    findOne(id) {
        return `This action returns a #${id} gym`;
    }
    update(id, updateGymDto) {
        return `This action updates a #${id} gym`;
    }
    remove(id) {
        return `This action removes a #${id} gym`;
    }
};
GymsService = __decorate([
    (0, common_1.Injectable)()
], GymsService);
exports.GymsService = GymsService;
//# sourceMappingURL=gyms.service.js.map