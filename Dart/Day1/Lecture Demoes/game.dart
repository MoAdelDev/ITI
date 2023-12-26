import 'dart:io';
void main(){
  String n = '5';
  for(int i =0 ; i<3 ; i++){
    print('Guess Number');
    String number = stdin.readLineSync()!;
    if(n == number){
      print('You Win');
      break;
    }else if(i<2){
      print('Try Again');
    }else{
      print('Game Over');
    }
  }
}