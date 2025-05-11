import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Buraya role check veya API isteği ekleyebilirsin
    if (email === 'admin@example.com' && password === 'admin') {
      router.push('/admin');
    } else if (email === 'customer@example.com' && password === 'customer') {
      router.push('/customer');
    } else {
      alert('Geçersiz giriş bilgisi');
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Giriş Yap' }} />
      <View style={styles.container}>
        <Text style={styles.title}>GİRİŞ YAP</Text>

        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  input: {
    height: 50,
    color: "black",
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1e40af',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
