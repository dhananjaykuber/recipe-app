import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const Ingredient = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.ingredient}
      onPress={() =>
        navigation.navigate('SingleIngredient', {
          name: item.name,
          id: item.ingredientId,
        })
      }>
      <Image source={{uri: item.photo_url}} style={styles.image} />

      <View style={{flexGrow: 1, flexDirection: 'row'}}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={{flexGrow: 1, flexDirection: 'row'}}>
        <Text style={styles.quantity}>{item.ingredientquantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ingredient: {
    margin: 10,
  },
  image: {
    width: width / 3 - 20,
    height: width / 4,
  },
  name: {
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 10,
    fontSize: 14,
    flex: 1,
    width: 1,
  },
  quantity: {
    color: '#969696',
    textAlign: 'center',
    flex: 1,
    width: 1,
  },
});

export default Ingredient;
