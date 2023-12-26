void main(){
  dynamic a = 1;
  print(a.runtimeType);
  // a = 'marwa';
  // print(a.runtimeType);
  // print(a.toUpperCase());

  Object b = 1;
  print(b.runtimeType);
  // b= 'marwa';
  // print(b.runtimeType);
  if(b is String) {
    print(b.toUpperCase());
  }
}