import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';
import {DefaultInput} from '../../../components/Inputs';
import Loader from '../../../components/Loader';

import {scaledSize} from '../../../styles';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';

import SignUpIcon from '../../../assets/images/signup.svg';
import {isUserDataValid} from '../../../utils/validation';

import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../../redux/auth';

import {errorSelectors} from '../../../redux/error';

function SignUp({navigation}) {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(errorSelectors.selectLoading());

  const onPressRegister = () => {
    dispatch(authActions.onSignUp({name, email, password}));
  };

  const setValueToState = (key, value) => {
    switch (key) {
      case 'name': {
        setUsername(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
    }
  };

  return !loading ? (
    <MainBlock>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainBlock}>
          <Text style={globalStyles.headerText}>Sign Up</Text>
          <View>
            <DefaultInput
              placeholder="First & Last Name"
              value={name}
              onChangeText={(text) => setValueToState('name', text)}
            />
            <DefaultInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setValueToState('email', text)}
            />
            <DefaultInput
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={(text) => setValueToState('password', text)}
            />

            <DefaultButton
              disabled={isUserDataValid({name, email, password})}
              title="Register"
              containerStyle={{marginVertical: scaledSize(55)}}
              onPress={onPressRegister}
            />
          </View>
          <Text style={[styles.regularText, {textAlign: 'center'}]}>or</Text>
          <View style={styles.row}>
            <View style={styles.fbButton}>
              <Text style={[styles.socialLabel, {color: 'white'}]}>
                Continue with
              </Text>
            </View>
            <View style={styles.googleButton}>
              <Text style={styles.socialLabel}>Continue with</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <SignUpIcon height={scaledSize(659)} width={scaledSize(913)} />
        </View>
      </KeyboardAwareScrollView>
    </MainBlock>
  ) : (
    <Loader />
  );
}

export default SignUp;
