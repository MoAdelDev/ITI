import 'dart:io';

import 'Atm/Deposit.dart';
import 'Atm/balance_inquiry.dart';
import 'Atm/withdraw.dart';
import 'account.dart';

void main() {
  double depositAmount = 0.0;
  double withdrawAmount = 0.0;
  int lastTransaction = 0;
  Account account = getAccountDetailsFromUser();

  selectOption(account, depositAmount, withdrawAmount, lastTransaction);
}

Account getAccountDetailsFromUser() {
  String accountNumber;
  String ownerName;
  String balance;
  Account account = Account(0, '', 0.0);
  print('Press 1 to enter account details');
  String input = stdin.readLineSync()!;
  if (input == '1') {
    print('Please enter account number');
    accountNumber = stdin.readLineSync()!;
    print('Please enter owner name');
    ownerName = stdin.readLineSync()!;
    print('Please enter balance');
    balance = stdin.readLineSync()!;
    account =
        Account(int.parse(accountNumber), ownerName, double.parse(balance));
  } else {
    getAccountDetailsFromUser();
  }
  return account;
}

void selectOption(Account account, double depositAmount, double withdrawAmount,
    int lastTransaction) {
  print('Press 2 to deposit');
  print('Press 3 to withdraw');
  print('Press 4 to Show current balance');
  print('Press 5 to Cancel last transaction');
  print('Press 6 to Exit');

  String input = stdin.readLineSync()!;
  switch (input) {
    case '2':
      print('Press Enter amount');
      depositAmount = double.parse(stdin.readLineSync()!);
      Deposit deposit = Deposit(depositAmount, 1);
      lastTransaction = 1;
      deposit.execute(account);
      selectOption(account, depositAmount, withdrawAmount, lastTransaction);
    case '3':
      print('Press Enter amount');
      withdrawAmount = double.parse(stdin.readLineSync()!);
      if (withdrawAmount > account.balance)
        print('Your balance is not enough');
      else {
        Withdraw withdraw = Withdraw(withdrawAmount, 2);
        lastTransaction = 2;
        withdraw.execute(account);
      }
      selectOption(account, depositAmount, withdrawAmount, lastTransaction);
    case '4':
      BalanceInquery balanceInquery = BalanceInquery(selectCurrencyType(), 3);
      print('Your balance is ${balanceInquery.execute(account)}');
      selectOption(account, depositAmount, withdrawAmount, lastTransaction);
    case '5':
      if (lastTransaction == 1) {
        Deposit deposit = Deposit(0.0, 1);
        deposit.cancelTransaction(account);
        withdrawAmount = 0.0;
        depositAmount = 0.0;
      } else if (lastTransaction == 2) {
        Withdraw withdraw = Withdraw(withdrawAmount, 2);
        withdraw.cancelTransaction(account);
        withdrawAmount = 0.0;
        depositAmount = 0.0;
      }
      selectOption(account, depositAmount, withdrawAmount, lastTransaction);
    case '6':
      // exit
      exit(1);
    default:
      selectOption(account, depositAmount, withdrawAmount, lastTransaction);
  }
}

String selectCurrencyType() {
  print('Press Enter 1 to show balance by EG');
  print('Press Enter 2 to show balance by USD');
  print('Press Enter 3 to show balance by E');
  String input = stdin.readLineSync()!;
  switch (input) {
    case '1':
      return 'EG';
    case '2':
      return 'USD';
    case '3':
      return 'E';
    default:
      selectCurrencyType();
  }
  return '';
}
