void main() {
  print(reverseInt(-01));
}

int reverseInt(int number) {
  String n = number.toString();
  List list = n.split("").reversed.toList();

  String result = list.join("");
  int numberReversed;
  if (number < 0) {
    numberReversed = int.parse(result.substring(0, result.length - 1)) * -1;
  } else {
    numberReversed = int.parse(result);
  }
  return numberReversed;
}
