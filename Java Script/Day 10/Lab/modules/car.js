export class Car{
    constructor(model, year, color,cc){
        this.model=model;
        this.year=year;
        this.color=color;
        this.cc=cc;
    }

    //override
    toString(){
        return this.model + "  " + this.year + "  " + this.color + "  " + this.cc;
    }
}