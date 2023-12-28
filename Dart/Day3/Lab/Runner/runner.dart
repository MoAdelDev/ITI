class Runner implements Comparable<Runner>{
  final String name;
  final double minutes;

  Runner(this.name, this.minutes);
  @override
  int compareTo(Runner other) {
    int result = this.minutes.compareTo(other.minutes);
    if(result==0) result = this.name.compareTo(other.name);
    return result;
  }

  @override
  String toString() {
    // TODO: implement toString
    return 'Name : ${this.name}, Minutes : ${this.minutes}';
  }
}