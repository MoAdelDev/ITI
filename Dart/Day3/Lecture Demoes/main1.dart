import 'Test1.dart';

void main(){
  User user = User('Mohamed', "1", "123456");
  User user1 = User('Mohamed', "1", "123456");

  if(user == user1){
    print('Equals');
  }

  print(user.hashCode);
  print(user1.hashCode);
}