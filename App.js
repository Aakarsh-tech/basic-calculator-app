import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  
  const handleOperation = (operator) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator by</Text>
      <Text style={styles.title}>Aakarsh</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={input1}
        onChangeText={setInput1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={input2}
        onChangeText={setInput2}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => handleOperation('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.subtractButton]} onPress={() => handleOperation('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.multiplyButton]} onPress={() => handleOperation('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.divideButton]} onPress={() => handleOperation('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 70,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  subtractButton: {
    backgroundColor: '#F44336',
  },
  multiplyButton: {
    backgroundColor: '#FF9800',
  },
  divideButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
  },
});
