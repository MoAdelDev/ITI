import 'dart:io';

void main() {
  int n = 9;
  // for (int i = 0; i < n; i++) {
  //   for (int j = 0; j < n - i - 1; j++) {
  //     stdout.write(' ');
  //   }

  //   for (int k = 0; k < 2 * i + 1; k++) {
  //     stdout.write('*');
  //   }

  //   print('');
  // }

  for (int i = 1; i <= 2 * n - 1; i++) {
    int stars = i <= n ? i : 2 * n - i;

    for (int j = 1; j <= stars; j++) {
      stdout.write("* ");
    }
    stdout.writeln();
  }
}
