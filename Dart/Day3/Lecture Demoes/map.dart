void main() {
  var m = {'a': 1, 'c': 10, 'd': 50};
  m['y'] = 8;
  print(m);

  var map = Map.identity();
  print(map);

  var k = {'a', 'b', 'c'};
  var v = [1, 2, 3];
  var map2 = Map.fromIterables(k, v);
  print(map2);

  var e = [1, 2, 3];
  var map3 = Map.fromIterable(
    e,
    key: (element) => element * 5,
    value: (element) => 'Item#$element',
  );
  print(map3);

  for(MapEntry entry in m.entries){
    print('${entry.key}->${entry.value}');
  }

  m.forEach((key, value) =>  print('$key->$value'));

  MapEntry e1 = MapEntry('F','Flutter');
  MapEntry e2 = MapEntry('A','Android');
  MapEntry e3 = MapEntry('R','React Native');
  MapEntry e4 = MapEntry('I','IOS');


  var map4 = Map.fromEntries([e1,e2,e3,e4]);
  print(map4);
}
