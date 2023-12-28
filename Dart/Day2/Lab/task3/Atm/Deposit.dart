import '../account.dart';
import 'rollback.dart';
import 'transaction.dart';

class Deposit extends Transaction implements RollBack {
  final double amount;

  Deposit(this.amount, super.transactionId);

  @override
  double execute(Account account) {
    return account.balance += amount;
  }

  @override
  double cancelTransaction(Account account) {
    return account.balance -= amount;
  }
}
