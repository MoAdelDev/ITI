import { Car } from "./car.js";

export class FlyingCar extends Car{
    canFly;
    constructor(model, year, color, cc, canFly){
        super(model, year, color, cc);
        this.canFly=canFly;
    }

    //override
    toString(){
        if(this.canFly){
            return super.toString() + " I can fly";
        }
        return super.toString() + " I can't fly";
    }
}