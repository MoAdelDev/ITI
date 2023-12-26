void main(){
  int a =3;
  int b = 2;
  const x = 2;//compile time
  // x=7;

  final y = a+b;//runtime

  final list = [1,2,3];
   list[0] = 10;
  print(list);
}