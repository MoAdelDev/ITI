import '../account.dart';

abstract class RollBack {
  double cancelTransaction(Account account);
}
