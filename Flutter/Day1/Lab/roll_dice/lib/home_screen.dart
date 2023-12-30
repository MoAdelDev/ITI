import 'dart:math';

import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  List<int> dices = [1, 2];
  bool isRollOneDice = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text(
          'The Dice App',
          style: TextStyle(
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              changeRollDiceMode();
            },
            child: Text(
              isRollOneDice ? 'ROLL TWO DICE' : 'ROLL ONE DICE',
              style: const TextStyle(
                fontSize: 18.0,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'Shake to throw',
              style: TextStyle(
                fontSize: 20.0,
              ),
            ),
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(child: Image.asset('assets/images/dice${dices[0]}.png')),
                  Expanded(child: Image.asset('assets/images/dice${dices[1]}.png')),
                ],
              ),
            ),
            Container(
              height: 40.0,
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.green,
                borderRadius: BorderRadius.circular(20.0),
              ),
              child: MaterialButton(
                onPressed: (){
                  _rollDice();
                },
                child: const Text(
                  'Roll Dice',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20.0,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  void _rollDice(){
    if(isRollOneDice){
      int indexRandom = Random().nextInt(2);
      int rollDiceRandom = Random().nextInt(6) + 1;
      setState(() {
        dices[indexRandom] = rollDiceRandom;
      });
    }
    else{
      int rollDice1 = Random().nextInt(6) + 1;
      int rollDice2 = Random().nextInt(6) + 1;
      setState(() {
        dices=[rollDice1, rollDice2];
      });
    }
  }

  void changeRollDiceMode(){
    setState(() {
      isRollOneDice = !isRollOneDice;
    });
  }
}
