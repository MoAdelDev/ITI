import 'dart:io';
import 'entities/account.dart';
import 'entities/balance_inquiry.dart';
import 'entities/deposit.dart';
import 'entities/transaction.dart';
import 'entities/withdraw.dart';

void main() {
  Account account = getAccountDataFromUser();
  Transaction? lastTransaction;
  selectOption(account, lastTransaction);
}

void selectOption(Account account, Transaction? lastTransaction) {
  print('Press 1 to deposit');
  print('Press 2 to withdraw');
  print('Press 3 to show your balance');
  print('Press 4 to cancel transaction');
  print('Press 5 to exit');
  String input = stdin.readLineSync()!;
  
  switch (input) {
    case '1':
      print('Press amount you want to deposit');
      double amount = double.parse(stdin.readLineSync()!);
      Deposit deposit = Deposit(1, amount);
      lastTransaction=deposit;
      deposit.execute(account);
    case '2':
      print('Press amount you want to withdraw');
      double amount = double.parse(stdin.readLineSync()!);
      Withdraw withdraw = Withdraw(2, amount);
      lastTransaction=withdraw;
      withdraw.execute(account);
    case '3':
      print('Press currency type you want to show');
      String currencyType = stdin.readLineSync()!;
      BalanceInquiry balanceInquiry = BalanceInquiry(3, currencyType);
      print(
          'Your balance in $currencyType is ${balanceInquiry.execute(account)}');
    case '4':
      if(lastTransaction is Deposit){
        lastTransaction.cancelTransaction(account);
      }
      else if(lastTransaction is Withdraw){
        lastTransaction.cancelTransaction(account);
      }
      lastTransaction=null;
    case '5':
      exit(1);
    default:
      print("Please enter correct answer");
  }
  selectOption(account, lastTransaction);
}

Account getAccountDataFromUser() {
  print('Press 1 to enter account details');
  String input = stdin.readLineSync()!;
  if (input == '1') {
    print('Enter your account number');
    int accountNumber = int.parse(stdin.readLineSync()!);
    print('Enter your name');
    String ownerName = stdin.readLineSync()!;
    print('Enter your balance');
    double balance = double.parse(stdin.readLineSync()!);
    return Account(accountNumber, ownerName, balance);
  }
  getAccountDataFromUser();
  return Account(0, '', 0.0);
}
