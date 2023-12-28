import 'student.dart';

void main(){
  List<Student> students = [
    Student('Ali', 50),
    Student('Mohamed', 150),
    Student('Ahmed', 50),
    Student('Omar', 120),
  ];
  // students.forEach((element) => print('${element.name} ${element.degree}'));
  print(students);
  students.sort();
  print(students);
}