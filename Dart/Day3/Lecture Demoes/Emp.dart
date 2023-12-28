class Emp{
  String name ='';
  int rate=0;
  int exp =0;
  double salary =0.0;
  double comm = 0.0;

  Emp(this.name, this.rate, this.exp, this.salary, this.comm);

  @override
  String toString() {
    return 'Emp{name: $name, rate: $rate, exp: $exp, salary: $salary, comm: $comm}';
  }
}