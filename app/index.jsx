import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3000/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json', // 🔥 garanti olsun diye ekledik
          },
        }
      );

      setResponseText(`✅ Giriş Başarılı:\n${JSON.stringify(res.data, null, 2)}`);
    } catch (err) {
      console.log('GÖNDERİLEN VERİ:', { email, password });
      console.log('🧨 Giriş hatası:', err?.response?.data || err);
      setResponseText(
        `❌ Giriş Hatası: ${err?.response?.data?.message || err.message}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Şifre</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Giriş Yap" onPress={handleLogin} />
      <Text style={styles.response}>{responseText}</Text>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 10,
  },
  response: {
    marginTop: 20,
    fontSize: 14,
    color: 'green',
  },
});
