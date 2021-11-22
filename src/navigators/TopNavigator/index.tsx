import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PhraseScreen from '../../screens/PhraseScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import CharactersScreen from '../../screens/CharactersScreen';

const Tab = createMaterialTopTabNavigator();

const Component = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Character" component={CharactersScreen} />
      <Tab.Screen name="Phrase" component={PhraseScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Component;
