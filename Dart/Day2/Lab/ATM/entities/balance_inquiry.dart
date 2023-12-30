import 'account.dart';
import 'transaction.dart';

class BalanceInquiry extends Transaction{

  final String currencyType;
  BalanceInquiry(super.transactionId, this.currencyType);

  @override
  double execute(Account account) {
    double balance = account.balance;
    switch (currencyType){
      case 'EG':
        return balance;
      case 'USD':
        return balance * 54;
      case 'Euro':
        return balance * 60;
      default:
        return balance;
    }
  }
}