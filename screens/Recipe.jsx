import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Slider
import {ImageSlider} from 'react-native-image-slider-banner';

// Data
import {recipes, categories} from '../data';

const Recipe = ({route}) => {
  const {itemId} = route.params;

  const navigation = useNavigation();

  const recipe = recipes.find(recip => recip.recipeId === itemId);

  // Getting all images for silder in { img: url } form
  const images = [];

  recipe.photosArray.map(photo => images.push({img: photo}));

  return (
    <ScrollView style={{position: 'relative'}}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={25} color={'#13b366'} />
      </TouchableOpacity>

      <View style={{height: 200}}>
        <ImageSlider
          data={images}
          preview={false}
          caroselImageStyle={{resizeMode: 'cover'}}
          showIndicator={false}
        />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.category}>
        {
          categories.filter(category => category.id === recipe.categoryId)[0]
            .name
        }
      </Text>
      <View style={styles.timeContainer}>
        <Ionicons name="alarm-outline" size={20} color={'#333333'} />
        <Text style={styles.time}>{recipe.time} Minutes</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Ingredients', {
            ingredients: recipe.ingredients,
            name: recipe.title,
          });
        }}>
        <Text style={styles.buttonText}>View Ingredients</Text>
      </TouchableOpacity>

      <Text style={styles.description}>{recipe.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    backgroundColor: '#fdfdfd',
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 2,
    borderRadius: 50,
    width: 28,
  },
  title: {
    color: '#333333',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
  },
  category: {
    color: '#13b366',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 15,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  time: {
    color: '#333333',
    fontWeight: '700',
    marginLeft: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#13b366',
    alignItems: 'center',
    borderRadius: 60,
    padding: 12,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#13b366',
  },
  description: {
    color: '#333333',
    paddingHorizontal: 20,
    textAlign: 'justify',
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default Recipe;
