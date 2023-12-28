void main() {
  print(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
}

int sumOddLengthSubarrays(List<int> arr) {
  int sum = 0;
  for (int i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (int i = 0; i < arr.length; i++) {
    for (int j = i + 2; j < arr.length; j += 2) {
      for (int k = i; k <= j; k++) sum += arr[k];
    }
  }
  return sum;
}
