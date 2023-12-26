import 'dart:io';
void main(){
  print('Enter your name');
  String name = stdin.readLineSync()!;
  print('Hello $name');
  print('Enter your Salary');
  String sal = stdin.readLineSync()!;
  try {
    double salary = double.parse(sal);
    print('Your salary : $salary');
  }on Exception catch(e){
    print('Invalid salary');
  }
}