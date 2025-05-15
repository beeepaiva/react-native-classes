import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

import { auth } from '../FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email.includes('@') || senha.length < 6) {
      Alert.alert('Login inválido');
      alert('Login inválido');
    }
    else{
      try {
        const user = await signInWithEmailAndPassword(auth, email, senha)
        if (user)  
          navigation.replace('MainTabs');
      } catch (error) {
        console.log(error)
        alert('Erro ao realizar login: ' + error.message);
      }
    }};

  const handleCreateAccount = async () => {
    if (!email.includes('@') || senha.length < 6) {
      Alert.alert('Login inválido');
      alert('Login inválido');
    }
    else{
      try {
        const user = await createUserWithEmailAndPassword(auth, email, senha)
        if (user)  
          navigation.replace('MainTabs');
      } catch (error) {
        console.log(error)
        alert('Erro ao criar login: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text>Senha:</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Criar conta com esse email e senha" onPress={handleCreateAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 }
});
