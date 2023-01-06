import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Menu from '../components/home/Menu';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Data
import {recipes} from '../data';

const width = Dimensions.get('window').width;

// Render Recipies
const renderRecipies = ({item}) => {
  return <Menu item={item} />;
};

const Search = () => {
  const [data, setData] = useState(recipes);

  // Filtering Search
  const handleTextChange = text => {
    const formattedQuery = text.toLowerCase();
    const data = recipes.filter(recipe =>
      recipe.title.toLocaleLowerCase().includes(formattedQuery),
    );
    setData(data);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={'#797979'}
          autoCapitalize="none"
          onChangeText={handleTextChange}
        />
        <Ionicons name="search-outline" size={22} color={'#333333'} />
      </View>
      <FlatList
        data={data}
        renderItem={renderRecipies}
        keyExtractor={item => item.recipeId}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    backgroundColor: '#dddddd',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 80,
    borderRadius: 10,
    marginVertical: 10,
    height: 45,
  },
  input: {
    width: width - 150,
    color: '#333333',
  },
});

export default Search;
