import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {baseStyles} from '../../theme/BaseTheme';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../hooks/interfaces/interfaces';
import {colors} from '../../theme/BaseTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const Component = (props: Props) => {
  const {navigation} = props;

  const {email, password, onChange} = useForm<LoginInterface>({
    email: '',
    password: '',
  });

  useEffect(() => {
    console.log(`Email => ${email}`);
    console.log(`Password => ${password}`);
  }, [email, password]);

  const doLogin = () => {
    if (email === '1' && password === '1') navigation.navigate('Home');
  };

  return (
    <View style={styles.Container}>
      <Text style={baseStyles.Title}>Breaking Bad</Text>
      <View style={styles.Controls}>
        <TextInput
          placeholder="Email"
          value={email as string}
          keyboardType="email-address"
          style={styles.Input}
          placeholderTextColor="white"
          onChangeText={value => onChange('email', value)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          value={password as string}
          secureTextEntry={true}
          style={styles.Input}
          onChangeText={value => onChange('password', value)}
        />
      </View>
      <TouchableOpacity onPress={doLogin} style={styles.Button}>
        <Text style={styles.ButtonText}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#282c34',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Input: {
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 5,
    width: '80%',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  Controls: {
    display: 'flex',
    marginTop: 20,
    width: '80%',
  },
});

export default Component;
