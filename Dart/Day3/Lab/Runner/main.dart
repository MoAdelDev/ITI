import 'runner.dart';

void main(){
  Runner runner1 = Runner('Mohammed', 20);
  Runner runner2 = Runner('Ali', 20);
  Runner runner3 = Runner('Ahmed', 50);
  Runner runner4 = Runner('Kareem', 60);
  Runner runner5 = Runner('Omar', 10);
  Runner runner6 = Runner('Adel', 5);

  List<Runner> runners = [runner1, runner2, runner3, runner4, runner5, runner6];

  runners.sort();

  print('The fastest runner is : ${runners.take(2).toList()}');

}