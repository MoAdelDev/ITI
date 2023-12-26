void main(){
  a:for(int i =0; i<5; i++){
    b:for(int j =0; j<5; j++){
      if(j==3) continue a;
      print('$i $j');
    }
  }
}