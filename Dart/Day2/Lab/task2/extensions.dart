import 'client.dart';

extension FullInfo on Client {
  String getFullInfo() {
    String fullInfo = '''
    Personal Info::

    name : ${this.name},
    email : ${this.personInfo?.email ?? 'UnSpecified'},
    country : ${this.address?.country ?? 'UnSpecified'},
    city : ${this.address?.city ?? 'UnSpecified'},
    street : ${this.address?.street ?? 'UnSpecified'},
    ''';

    return fullInfo;
  }
}
