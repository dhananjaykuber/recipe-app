import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ingredient from '../components/ingredients/Ingredient';

// Data
import {ingredients as ingredientData} from '../data';

// Ingredients Render
const renderIngredients = ({item}) => {
  return <Ingredient item={item} />;
};

const Ingredients = ({route}) => {
  const {ingredients, name} = route.params;

  const navigation = useNavigation();

  const dataOfIngredients = [];

  // Filtering ingredients
  ingredients.map(ingredient => {
    const recipe = ingredientData.find(
      ingredientDt => ingredientDt.ingredientId === ingredient[0],
    );
    dataOfIngredients.push({...recipe, ingredientquantity: ingredient[1]});
  });

  useEffect(() => {
    navigation.setOptions({title: `Ingredients of ${name}`});
  }, []);

  return (
    <View style={{backgroundColor: '#fdfdfd', flex: 1}}>
      <FlatList
        data={dataOfIngredients}
        renderItem={renderIngredients}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Ingredients;
