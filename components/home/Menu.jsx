import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Data
import {categories} from '../../data';

const width = Dimensions.get('window').width;

const Menu = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.menu}
      onPress={() =>
        navigation.navigate('Recipe', {
          itemId: item.recipeId,
        })
      }>
      <Image source={{uri: item.photo_url}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>
        {categories.filter(category => category.id === item.categoryId)[0].name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menu: {
    borderWidth: 1,
    borderColor: '#dedede',
    margin: 8,
    borderRadius: 15,
    paddingBottom: 10,
  },
  image: {
    width: width / 2 - 20,
    height: width / 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  category: {
    color: '#3b3b3b',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Menu;
