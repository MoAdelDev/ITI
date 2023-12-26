void main(){
  sayHi();
  // String s = sayHello();
  // print(s);
  print(sayHello());
  add(5,8);
  print(addNumber(3, 5));
}

void sayHi(){
  print('Hi');
}

String sayHello(){
  return 'Hi';
}

void add(int x ,int y){
  print(x+y);
}

int addNumber(int x,int y){
  return x+y;
}


/*
return-type fun-name(parameters){


}
 */