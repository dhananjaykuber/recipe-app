import 'react-native-gesture-handler';

import React from 'react';

// React Native Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import Home from './screens/Home';
import Categories from './screens/Categories';
import Search from './screens/Search';
import CustomDrawer from './components/CustomDrawer';
import Recipe from './screens/Recipe';
import Ingredients from './screens/Ingredients';
import {Text, TouchableOpacity} from 'react-native';
import SingleIngredient from './screens/SingleIngredient';

// Drawer Navigation
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Ingredient"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: '#333333',
          drawerInactiveTintColor: '#333333',
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'uppercase',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={({navigation, route}) => ({
            headerTitleAlign: 'center',
            drawerIcon: ({color}) => (
              <Ionicons name="restaurant-outline" size={22} color={color} />
            ),
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  color={'#0095ff'}
                />
                <Text
                  style={{color: '#0095ff', fontSize: 17, fontWeight: '600'}}>
                  Home
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={({navigation, route}) => ({
            headerTitleAlign: 'center',
            drawerIcon: ({color}) => (
              <Ionicons name="search-outline" size={22} color={color} />
            ),
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  color={'#0095ff'}
                />
                <Text
                  style={{color: '#0095ff', fontSize: 17, fontWeight: '600'}}>
                  Home
                </Text>
              </TouchableOpacity>
            ),
            headerRight: props => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <MaterialIcons name="menu" size={25} color={'#333333'} />
              </TouchableOpacity>
            ),
          })}
        />

        {/* Below Hide From Drawer Slider  */}
        <Drawer.Screen
          name="Recipe"
          component={Recipe}
          options={{
            drawerLabelStyle: {
              display: 'none',
            },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Ingredients"
          component={Ingredients}
          options={({navigation}) => ({
            headerTitleAlign: 'left',
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  color={'#0095ff'}
                />
                <Text
                  style={{color: '#0095ff', fontSize: 17, fontWeight: '600'}}>
                  Back
                </Text>
              </TouchableOpacity>
            ),
            drawerLabelStyle: {
              display: 'none',
            },
          })}
        />
        <Drawer.Screen
          name="SingleIngredient"
          component={SingleIngredient}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="chevron-back-outline"
                  size={25}
                  color={'#0095ff'}
                />
                <Text
                  style={{color: '#0095ff', fontSize: 17, fontWeight: '600'}}>
                  Back
                </Text>
              </TouchableOpacity>
            ),
            drawerLabelStyle: {
              display: 'none',
            },
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
