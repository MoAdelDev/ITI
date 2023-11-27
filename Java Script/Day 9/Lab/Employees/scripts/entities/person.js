class Person{
    static count=0;
    #fullName;
    constructor(gender,image){
            Person.count++;
            this.image=image;
            this.gender=gender
        
    }
    
    set fullName(name){
        if(name.split(' ').length<=1){
            alert('Please Enter your fullname');
        }
        else{
            this.#fullName=convertWordToPascalCase(name);
        }
    }

    get fullName(){
        return this.#fullName;
    }
}