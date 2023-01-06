import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

// Data
import {recipes} from '../../data';

const width = Dimensions.get('window').width;

const Category = ({item}) => {
  return (
    <View style={styles.category}>
      <Image source={{uri: item.photo_url}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.count}>
        {recipes.filter(recipe => recipe.categoryId === item.id).length}{' '}
        recipies
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderWidth: 1,
    borderColor: '#dedede',
    marginBottom: 20,
    borderRadius: 20,
    paddingBottom: 10,
  },
  image: {
    width: width - 30,
    height: width / 2 - 20,
    borderRadius: 20,
  },
  title: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  count: {
    color: '#3b3b3b',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500',
  },
});

export default Category;
