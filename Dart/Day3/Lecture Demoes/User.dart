class User {
  String? username ;
  String? password ;
  int? id ;

  User({this.username, this.password, this.id});

  Map<String, dynamic> toMap() {
    return {'username': username, 'password': password, 'id': id};
  }


  @override
  String toString() {
    return 'User{username: $username, password: $password, id: $id}';
  }

  // factory User.fromMap(Map<String, dynamic> map){
  //   return User(username: map['username'],password: map['password'],id: map['id']);
  // }

   User.fromMap(Map<String, dynamic> map){
    username =  map['username'];
    password =  map['password'];
    id = map['id'];
  }

}

void main() {
  User user1 = User();
  user1.username = 'Omar';
  user1.password = 'om1488';
  user1.id = 100;

  print(user1.toMap());

  Map<String, dynamic> userMap = {
    'username': 'Ahmed',
    'password': 'Ah786',
    'id': 101
  };

  var user = User.fromMap(userMap);
  print(user);
  /*
  {'username':'Omar','password':'om1488', 'id':100}
   */
}
