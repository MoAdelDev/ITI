import 'dart:io';

import 'Emp.dart';

void main() {
  List<Emp> list = [
    Emp('Ahmed', 2, 5, 10000, 200),
    Emp('Khaled', 5, 7, 20000, 210),
    Emp('Moustafa', 2, 2, 7000, 20),
    Emp('Omar', 3, 3, 8000, 200),
  ];
  print(list);
  print('''
  Enter 1 for sort by Name
  Enter 2 for sort by Salary
  Enter 3 for sort by Comm
  Enter 4 for sort by Rate
  Enter 5 for sort by Exp
  ''');
  String sortId = stdin.readLineSync()!;
  switch (sortId) {
    case "1":
      sortByName(list);
      break;
    case "2":
      sortBySalary(list);
      break;
    case "3":
      sortByComm(list);
      break;
    case "4":
      sortByRate(list);
      break;
    case "5":
      sortByExp(list);
  }
}

void sortByName(List<Emp> emp) {
  emp.sort((a, b) => a.name.compareTo(b.name));
  print(emp);
}

void sortBySalary(List<Emp> emp) {
  emp.sort((a, b) => a.salary.compareTo(b.salary));
  print(emp);
}

void sortByComm(List<Emp> emp) {
  emp.sort((a, b) => a.comm.compareTo(b.comm));
  print(emp);
}

void sortByRate(List<Emp> emp) {
  emp.sort((a, b) => a.rate.compareTo(b.rate));
  print(emp);
}

void sortByExp(List<Emp> emp) {
  emp.sort((a, b) => a.exp.compareTo(b.exp));
  print(emp);
}
