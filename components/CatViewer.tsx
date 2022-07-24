/* eslint-disable prettier/prettier */
import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CatCard from './CardCat';

type Gato = {
  adaptability: number;
  image: {
    id: string,
    url: string,
    width: number,
    height: number,
  }
  alt_names: string;
  name: string;
  origin: string;
  temperament: string;
};

const CatViewer = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [gatos, setGatos] = useState<Gato[]>([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(res => res.json())
      .then((resGatos: Gato[]) => {
        // setGatos(resGatos);
        for (const gato of resGatos) {
          if ('image' in gato) {
            console.log(gato.image);
          }
        }
        setGatos(resGatos);
      });
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CatWatcher</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#5ac9e8" />
      ) : (
        <View>
          <View style={styles.searchSection}>
            <TextInput
              defaultValue={searchText}
              onChangeText={newText => setSearchText(newText)}
              style={styles.input}
            />
            <Icon name="search" tvParallaxProperties={undefined} />
          </View>
          <ScrollView>
            {gatos.map(gato =>
              CatCard({
                name: gato.name,
                imageUrl: gato.image?.url ?? '',
                country: gato.origin,
                caracteristic: gato.temperament.split(',')[0],
              }),
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchSection: {
    backgroundColor: '#fff',
    color: '#424242',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 2,
    borderBottomWidth: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
export default CatViewer;
