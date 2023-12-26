void main(){
  sayHi();
  sayHi(name: 'marwa');
  setUserData('05454848', 'mohamed');
  setUserData('05454848', 'mohamed',salary: 50000.0);
}

// void sayHi([String? name]){
//   print('Hi ${name ??= 'Guest'}');
// }
//
// void setUserData(String phone, String name, [int? id ,double salary=0.0]){
//
// }

void sayHi({String? name}){
  print('Hi ${name ??= 'Guest'}');
}

void setUserData(String phone, String name, {int? id ,double salary=0.0}){

}

/*
Optional parameters
1- positional []
2- named {}
3- default
 */