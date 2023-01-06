import React from 'react';
import {View} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <DrawerItemList {...props} />
    </View>
  );
};

export default CustomDrawer;
