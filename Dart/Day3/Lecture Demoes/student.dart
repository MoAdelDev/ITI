class Student implements Comparable<Student> {
  String name = '';
  double degree = 0.0;

  Student(this.name, this.degree);

  @override
  String toString() {
    return 'Student{name: $name, degree: $degree}';
  }

  @override
  int compareTo(Student other) {
    int res =  this.degree.compareTo(other.degree);
    if(res ==0){
      res = this.name.compareTo(other.name);
    }
    return res;

  }
}
