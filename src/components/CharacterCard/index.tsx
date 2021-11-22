import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CharacterInterface} from '../../interfaces/interfaces';
import {colors} from '../../theme/BaseTheme';

//va a permitir renderizar las CharacterCards
interface Props {
  character: CharacterInterface;
}

const Component = (props: Props) => {
  const {character} = props;
  const {name} = character;

  return (
    <View style={styles.Container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderBottomWidth: 0.5,
    height: 100,
  },
});

export default Component;
