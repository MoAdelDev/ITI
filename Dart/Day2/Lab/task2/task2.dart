import 'address.dart';
import 'client.dart';
import 'extensions.dart';
import 'person.dart';

void main() {
  Client client = Client(
    'Mohammed',
    address: Address('Egypt', 'Cairo'),
    personInfo: PersonInfo(email: 'm.adeldev10@gmail.com'),
  );
  print(client.getFullInfo());

  Client client1 = Client(
    'Mohammed',
  );
  print(client1.getFullInfo());
}
