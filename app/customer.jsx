import { View, StyleSheet, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen />

      <View style={styles.container}>
        <Text style={styles.text}>burası musteri sayfasıdır</Text>

        <Link href="/" style={styles.button}>
          giris sayfasina geri don
        </Link>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'black',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
  },
});
