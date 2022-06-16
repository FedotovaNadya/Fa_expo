import { StatusBar } from 'expo-status-bar';
import { Image, TouchableOpacity, ToastAndroid, StyleSheet, ScrollView, Text, View } from 'react-native';

export default function App() {

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Meow!",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Котокафе Котики и Люди</Text>
      </View>

    <View style={styles.container}>
      <View style={styles.post}>
        <Image
            style={styles.stretch}
            source={{uri: 'https://static.tildacdn.com/tild3237-6137-4735-b339-346236316434/kotikilyudi.png'}}
          />
        <Text style={styles.h2}>Cветлые уютные теплые заведения для котов, взрослых и детей.</Text>
        <Text style={styles.p}>то самое знаменитое первое котокафе Москвы.</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={showToastWithGravity} >
            <Text style={styles.buttonText}>Забронировать место</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.post}>
        <Image
            style={styles.stretch}
            source={{uri: 'https://static.tildacdn.com/tild6231-3039-4436-a666-383936393939/2.png'}}
          />
        <Text style={styles.h2}>Сувениры</Text>
        <Text style={styles.p}>дари себе приятное и помогай котикам.</Text>
        <TouchableOpacity style={styles.button}
        onPress={showToastWithGravity}>
            <Text style={styles.buttonText}>Хочу!</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.post}>
        <Image
            style={styles.stretch}
            source={{uri: 'https://thumb.tildacdn.com/tild3735-6135-4731-a364-316438636630/-/resize/320x/-/format/webp/___1.png'}}
          />
        <Text style={styles.h2}>Нас можно подарить</Text>
        <Text style={styles.p}>Подарите сертификат на посещение котокафе за 550 рублей*. Приходите в то кафе, которое вам нравится больше всего.</Text>
        <TouchableOpacity style={styles.button}
        onPress={showToastWithGravity}>
            <Text style={styles.buttonText}>Подарить</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 30,
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  post: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: 15,
    paddingEnd: 15,
    alignSelf: 'stretch',
    marginBottom: 40
  },
  // h1: {
  //   fontWeight: 'bold',
  //   fontSize: 25,
  //   paddingStart: 15,
  //   paddingBottom: 30,
  //   margin: 0,
  //   color: '#222',
  //   alignSelf: 'flex-start'
  // },

  h2: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    padding: 0,
    margin: 0,
    color: '#222',
    alignSelf: 'flex-start'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 0,
    margin: 0,
    color: '#222',
    alignSelf: 'center'
  },
  p: {
    marginTop: 12,
    marginBottom: 0,
    alignSelf: 'flex-start',
    lineHeight: 23,
    fontSize: 14
  },
  button: {
    marginTop: 22,
    backgroundColor: "#212121",
    paddingTop: 11, 
    paddingBottom: 11,
    paddingStart: 22,
    paddingEnd: 22,
    alignSelf: 'flex-start',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
  stretch: {
    alignSelf: 'stretch',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover'
  }
});
