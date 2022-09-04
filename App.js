import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {

  // const [text, setText] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');
  const [equations, setEquations] = useState([]);

  const userInput1 = input1 => {
    setInput1(input1);
  }
  const userInput2 = input2 => {   
    setInput2(input2);
  };

    let symbol ='';
    let equation = '';
  
  const buttonPressed1 = () => { 
    let sum = parseFloat(input1) + parseFloat(input2);
    createEquation(input1, input2, "+", sum);
    setInput1('');
    setInput2('');
  };

  const buttonPressed2 = () => { 
    let minus = input1 - input2;
    createEquation(input1, input2, "-", minus);
    setInput1('');
    setInput2('');
  };

  const createEquation = (input1, input2, symbol, res) => {
    equation= input1 + " " + symbol + " " + input2 + " = " + res;
    setResult(res);
    setEquations([...equations,equation]);
    console.log(equations);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Result: { result } </Text>
        <TextInput 
              style={styles.input} 
              keyboardType= 'numeric'
              onChangeText={userInput1}
              value={input1}
              />
      <TextInput 
              style={styles.input} 
              keyboardType= 'numeric'
              onChangeText={userInput2}
              value={input2}
              />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Button onPress={buttonPressed1} title="plus" />
      <Button onPress={buttonPressed2} title="minus" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'black', 
    borderWidth: 1,
    backgroundColor: 'white',
  }
});
