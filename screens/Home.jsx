import React from 'react';
import {View, FlatList} from 'react-native';
import Menu from '../components/home/Menu';

// Data
import {recipes} from '../data';

// Recipies Render
const renderRecipies = ({item}) => {
  return <Menu item={item} />;
};

const Home = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={recipes}
        renderItem={renderRecipies}
        keyExtractor={item => item.recipeId}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
