class Employee extends Person{
    #salary;
    #language;
    constructor(gender,salary, language, image=''){
        super(gender, image);
        this.#salary=salary;
        this.#language=language;
    }

    get language(){
        return this.#language;
    }
    get salary(){
        return this.#salary;
    }

    set language(language){
        this.#language=language;
    }
    set salary(salary){
        this.#salary=salary;
    }
    // override
    toString(){
        return `${super.name} ->>  ${this.#salary}`
    }
}