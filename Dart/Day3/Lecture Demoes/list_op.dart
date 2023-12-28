import 'dart:math';

void main(){
  var list = [1,2,4,2];
  // for(int i =0; i<list.length; i++){
  //   print(list[i]);
  // }
  //
  // for(int i in list){
  //   print(i);
  // }
  //
  // list.forEach((element) => print(element));
  // print(list[0]);
  // print(list.elementAt(0));
  //
  // print(list.indexOf(2,2));
  // print(list.lastIndexOf(2));
  //
  // print(list.map((e) => e*3).toList());
  // print(list.first);
  // print(list.firstWhere((element) => element>3));
  // print(list.single);
  // print(list.singleWhere((element) => element.isOdd));
  // print(list.join("-"));
  // print(list.take(2));
  // print(list.takeWhile((value)=> value<3));
  print(list.reduce((value, element) => value+element));
  print(list.reduce((value, element)=>max(value, element)));
  print(list.reduce((value, element)=>max(value, element)));
  print(list.reduce((max)));
  print(list.reduce((value, element) => value> element? value : element));
  list.add(100);
  print(list);
  list.insert(0, 200);
  print(list);
  print(list.any((element) => element.isOdd));
  print(list.every((element) => element.isOdd));
  
}