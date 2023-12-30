import 'account.dart';
import 'rollback.dart';
import 'transaction.dart';

class Deposit extends Transaction implements RollBack{
  final double amount;
  Deposit(super.transactionId, this.amount);

  @override
  double execute(Account account) {
    if(amount >=50){
      double newBalance = account.balance+=amount;
      return newBalance;
    }
    return 0.0;
  }

  @override
  void cancelTransaction(Account account) {
    account.balance-=amount;
  }
}

