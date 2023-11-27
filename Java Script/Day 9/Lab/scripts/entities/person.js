class Person{
    static count=0;
    constructor(name, gender,image){
        if(name.split(' ').length<=1){
            alert('Please Enter your fullname');
        }
        else{
            Person.count++;
            this.image=image;
            this.name=name;
            this.gender=gender
        }
    }
}