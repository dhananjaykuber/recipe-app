import React from 'react';
import {View, FlatList} from 'react-native';
import Category from '../components/categories/Category';

// Data
import {categories} from '../data';

// Categories Render
const renderCategories = ({item}) => {
  return <Category item={item} />;
};

const Categories = () => {
  return (
    <View style={{alignItems: 'center', paddingVertical: 10}}>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
