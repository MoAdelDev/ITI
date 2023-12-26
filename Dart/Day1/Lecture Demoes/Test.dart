class Test{
  int x = 0;
  int y =0;

  void add(){
    print(x+y);
  }
}

void main(){
  // Test t = Test();
  // t.setValue(3, 8);
  // t.add();
  Test()..x=3..y=5..add();
}