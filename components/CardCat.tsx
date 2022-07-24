/* eslint-disable prettier/prettier */
import React, {PropsWithChildren} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const CatCard: React.FC<
  PropsWithChildren<{
    name: string;
    country: string;
    caracteristic: string;
    imageUrl: string;
  }>
> = ({name, country, caracteristic, imageUrl}) => {
  // console.log(imageUrl);
  return (
    <View style={styles.catCard}>
      <View style={styles.topCard}>
        <Text>{name}</Text>
      </View>
      {imageUrl !== '' ? (
        <Image style={styles.imagenGato} source={{uri: imageUrl}} />
      ) : (
        <Text>Image no dispoinble</Text>
      )}

      <View style={styles.bottomCard}>
        <Text>{country}</Text>
        <Text>{caracteristic}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  catCard: {
    borderWidth: 1,
    alignContent: 'center',
    padding: 10,
  },
  imagenGato: {
    height: 300,
    width: 300,
  },
  bottomCard: {
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    flexDirection: 'row',
  },
  topCard: {
    alignContent: 'space-between',
    flexDirection: 'row',
  },
});

export default CatCard;
