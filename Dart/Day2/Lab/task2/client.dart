import 'address.dart';
import 'person.dart';

class Client {
  final String name;
  Address? address;
  PersonInfo? personInfo;
  Client(this.name, {this.address, this.personInfo});
}
