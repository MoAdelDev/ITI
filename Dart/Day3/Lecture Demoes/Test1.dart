import 'package:equatable/equatable.dart';

class User extends Equatable{
  String name='';
  String id='';
  String phone ='';

  User(this.name, this.id, this.phone);

  @override
  List<Object?> get props => [name,id,phone];

  // @override
  // bool operator ==(Object other) =>
  //     identical(this, other) ||
  //     other is User &&
  //         runtimeType == other.runtimeType &&
  //         name == other.name &&
  //         id == other.id &&
  //         phone == other.phone;
  //
  // @override
  // int get hashCode => name.hashCode ^ id.hashCode ^ phone.hashCode;
}

