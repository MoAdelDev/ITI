import 'account.dart';
import 'rollback.dart';
import 'transaction.dart';

class Withdraw extends Transaction implements RollBack{
  final double amount;
  Withdraw(super.transactionId, this.amount);
  @override
  double execute(Account account){
    if(account.balance >= amount){
      double newBalance = account.balance-=amount;
      return newBalance;
    }
    return 0.0;
  }

  @override
  void cancelTransaction(Account account) {
    account.balance+=amount;
  }
}