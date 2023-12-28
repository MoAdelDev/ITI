import 'dart:io';

import '../account.dart';
import 'transaction.dart';

class BalanceInquery extends Transaction {
  final String currencyType;
  BalanceInquery(this.currencyType, super.transactionId);

  @override
  double execute(Account account) {
    if (currencyType == 'EG') {
      return account.balance;
    } else if (currencyType == 'USD') {
      return account.balance * 50;
    } else if (currencyType == 'E') {
      return account.balance * 70;
    }
    return account.balance;
  }
}
