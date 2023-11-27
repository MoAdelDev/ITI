class Employee extends Person{
    #salary;
    #language;
    constructor(name, gender,salary, language, image=''){
        super(name, gender, image);
        this.#salary=salary;
        this.#language=language;
    }

    get langugae(){
        return this.#language;
    }
    get salary(){
        return this.#salary;
    }

    // override
    toString(){
        return `${super.name} ->>  ${this.#salary}`
    }
}