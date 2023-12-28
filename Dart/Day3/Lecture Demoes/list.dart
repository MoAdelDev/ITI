void main(){
  var list = [];
  list.add(5);
  list.add("flutter");

  print(list);

  var list1 = List.empty(growable: true);
  list1.add(100);
  print(list1);

  var list2 = List.filled(3, 0,growable: true);
  list2[0] = 10;
  list2[1] = 20;
  list2[2] = 30;
  list2.add(90);
  print(list2);

  var list3 = List.generate(100, (index) => (index+2)*3 , growable: false);
  // list3.add(500);
  print(list3);

  var l = [1,2,3,4];
  var list4 = List.unmodifiable(l);
  l[0] = 10;
   // list4[0] = 10;
  print(l);
  print(list4);

  List<int> list5 = List<int>.from([1,2,3,4]);
  var list6 = List.of([1,2,3,4,"flutter"]);

  print(list5.runtimeType);
  print(list6.runtimeType);
}