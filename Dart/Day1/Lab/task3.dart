void main() {
  num n = 5;
  num m = 10;
  num a = 5;
  int widthNumbers = ((n + a) - 1) ~/ a;
  int heghtNumbers = ((m + a) - 1) ~/ a;

  print(widthNumbers * heghtNumbers);
}
