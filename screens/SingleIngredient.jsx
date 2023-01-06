import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu from '../components/home/Menu';

// Data
import {ingredients, recipes} from '../data';

const width = Dimensions.get('window').width;

// Header Component
const Header = (name, id) => {
  return (
    <View>
      <Image
        source={{
          uri: ingredients.find(ingredient => ingredient.ingredientId === id)
            .photo_url,
        }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>Recipes with {name}:</Text>
      </View>
    </View>
  );
};

// Render Recipies
const renderRecipies = ({item}) => {
  return <Menu item={item} />;
};

const SingleIngredient = ({route}) => {
  const {name, id} = route.params;

  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.setOptions({title: name});

    setData([]);

    recipes?.map(recipe => {
      recipe.ingredients.map(ingredient => {
        if (ingredient[0] === parseInt(JSON.stringify(id))) {
          setData(data => [...data, {...recipe}]);
        }
      });
    });
  }, [name]);

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={data}
          renderItem={renderRecipies}
          keyExtractor={item => item.recipeId}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Header(name, id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width / 1.8,
  },
  container: {
    marginHorizontal: 10,
  },
  heading: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
});

export default SingleIngredient;
