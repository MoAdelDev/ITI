class SimpleTime {
  int seconds, nanoSecondes, minutes, hours;
  SimpleTime({
    this.seconds = 0,
    this.nanoSecondes = 0,
    this.hours = 0,
    this.minutes = 0,
  });
  num toSecondOfDay() {
    return ((hours * 60) + minutes * 60 + seconds);
  }

  num toNanoOfDay() {
    return toSecondOfDay() * (10 ^ 9);
  }
}

void main() {
  SimpleTime simpleTime = SimpleTime(minutes: 60, nanoSecondes: 200);
  print(simpleTime.toNanoOfDay());
}
