/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {})
      .then(res => res.json())
      .then((res: any[]) => {
        setLoading(false);
        for (const r of res) {
          console.log(r.name);
        }
        console.log(res.length);
      });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {loading ? <ActivityIndicator size="large" /> : <Card />}
      </View>
      <Image
        source={require('./assets/gatosInicial.gif')}
        style={styles.catImage}
      />
    </SafeAreaView>
  );
};

const Card = () => {
  return <Text> Hello world men! </Text>;
};

const styles = StyleSheet.create({
  catImage: {
    width: 100,
    height: 100,
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
