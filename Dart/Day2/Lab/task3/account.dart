class Account {
  final int accountNumber;
  final String ownerName;
  double balance;

  Account(this.accountNumber, this.ownerName, this.balance);

  @override
  String toString() {
    return 'Acc number ${this.accountNumber} Owner name ${this.ownerName} balance ${this.balance}';
  }
}
