void main() {
  print(getLongestWord("This is BIGWord"));
  print(getLongestWord("Thissssssssss is BIGWord"));
}

String getLongestWord(String word) {
  List<String> words = word.split(" ");
  String longestWord = "";
  for (int i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
