void main() {
  var a = (int x, int y) => x + y;
  var s = (int x, int y) => x - y;
  calc(3, 8, s);

  var fn = calc1('/');
  print(fn(3,5));
}

void calc(int x, int y, Function f) {
  print(f(x, y));
}

Function calc1(String op) {
  switch (op) {
    case '+':
      return (int x, int y) => x + y;

    case '-':
      return (int x, int y) => x - y;

    default:
      return (int x, int y) => 'known op';
  }

}
