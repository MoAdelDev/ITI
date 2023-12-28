import 'dart:io';

void main(){

  String input = getAndValidateInputFromUser().toLowerCase();

  List<String> inputs =input.split("");

  Set username= inputs.toSet();;
  
  if(username.length.isOdd){
    print('This is male');
  }
  else{
    print('This is female');
  }
}

String getAndValidateInputFromUser(){
  print('Please Enter Username');
  String input = stdin.readLineSync()!;
  if(input != '' && input.isNotEmpty && input.length <=100){
    return input;
  }
  getAndValidateInputFromUser();
  return '';
}