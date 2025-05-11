import { View, StyleSheet, Text, TextInput, Pressable, FlatList } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState } from 'react';

export default function AdminPage() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [menu, setMenu] = useState([]);

  const handleAddProduct = () => {
    if (!productName || !price) {
      alert('Lütfen ürün adı ve fiyat girin');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: productName,
      price: parseFloat(price),
    };

    setMenu([...menu, newItem]);
    setProductName('');
    setPrice('');
  };

  return (
    
    <>
      <Stack.Screen options={{ title: 'Admin Paneli' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Yeni Ürün Ekle</Text>

        <TextInput
          style={styles.input}
          placeholder="Ürün Adı"
          value={productName}
          onChangeText={setProductName}
        />

        <TextInput
          style={styles.input}
          placeholder="Fiyat (₺)"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Pressable style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Ürün Ekle</Text>
        </Pressable>

        <Text style={styles.menuTitle}>Menüdeki Ürünler:</Text>

        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.menuItem}>
              {item.name} - {item.price.toFixed(2)} ₺
            </Text>
          )}
        />

        <Pressable onPress={() => router.push('/')} style={{ marginTop: 30 }}>
          <Text style={{ color: '#1e40af' }}>Giriş Sayfasına Dön</Text>
        </Pressable>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#16a34a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 6,
  },
});
