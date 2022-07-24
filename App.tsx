import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CatViewer from './components/CatViewer';
const Stack = createNativeStackNavigator();

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  // useEffect(() => {
  //   fetch('https://api.thecatapi.com/v1/breeds', {})
  //     .then(res => res.json())
  //     .then((res: any[]) => {
  //       for (const r of res) {
  //         console.log(r.name);
  //       }
  //       console.log(res.length);
  //     });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Bienvenido'}}
        />
        <Stack.Screen
          name="catViewer"
          component={CatViewer}
          options={{title: 'Gaticos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.header}> CatWatcher </Text>
      <View style={styles.container}>
        <FastImage
          source={require('./assets/gato3Blue.gif')}
          style={styles.catImage}
        />
      </View>
      <View style={styles.buttonLogin}>
        <Button
          title="Ingresar"
          color="#5ac9e8"
          onPress={() => {
            navigation.navigate('catViewer');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    padding: 20,
  },
  header: {
    marginTop: 20,
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  catImage: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
