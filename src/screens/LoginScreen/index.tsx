import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {useForm} from '../../hooks/useForm';
import {LoginInterface} from '../../hooks/interfaces/interfaces';
import {colors} from '../../theme/BaseTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { whileStatement } from '@babel/types';

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
      <Text style={styles.TSNText}>Puerto de Manzanillo</Text>
      <Image 
        source={require('../../assets/images/PortManzanilloLogo.png')}
        style={styles.logo}
      />
        <View style={styles.FormContainer}>
          <View style={styles.Input}>
            <TextInput
              keyboardType="email-address"
              placeholder="user@example.com"
              placeholderTextColor="#edf6f9"
              secureTextEntry={true}
              style={styles.InputPadding}
              onChangeText={value => onChange('password', value)}
            />
          </View>
          <View style={styles.Input}>
            <TextInput
              keyboardType="numeric"
              placeholder="*********"
              placeholderTextColor="#edf6f9"
              secureTextEntry={true}
              style={styles.InputPadding}
              onChangeText={value => onChange('password', value)}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.LoginBtn}>
            <Text style={styles.LoginBtnText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: "#14213d",
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  TSNText:{
    color: "#fca311",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 2,
  },
  logo:{
    height: "20%",
    width: "50%",
  },
  FormContainer:{
    backgroundColor: "#023047",
    width:"80%",
    alignItems: 'center',
    padding: 5,
    margin: 10,
    marginTop: 20,
    borderColor: '#7c98b3',
    borderWidth: 3,
    borderRadius: 20,
  },
  Input:{
    width: "80%",
    borderColor: '#accbe1',
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
  },
  InputPadding:{
    paddingLeft: 10,
    paddingRight: 10,
    color: "#fff"
  },
  ForgotText:{
    color: '#277da1',
    fontSize: 15,
    margin: 2,
    marginBottom: 10,
  },
  LoginBtn:{
    backgroundColor: '#fca311',
    padding: 10,
    borderRadius: 5,
  },
  LoginBtnText:{
    fontSize: 20,
    fontWeight:"600",
    letterSpacing: 2,
  },
});

export default Component;
