void main(){
  var set = <int>{};
  print(set.runtimeType);

  var set1 = Set.identity();
  set1.add(1);
  print(set1);

  var set2 = Set.unmodifiable([1,2,3,2,4]);
  print(set2);

  var set3 = Set.from([1,2,3,2,4]);
  var set4 = Set.of([1,2,3,2,4]);
  print(set3.runtimeType);
  print(set4.runtimeType);

  set4.forEach((element) => print(element));
  for(int i in set4){
    print(i);
  }
}