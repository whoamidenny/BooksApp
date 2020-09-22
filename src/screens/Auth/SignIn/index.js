import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';
import Loader from '../../../components/Loader';
import {DefaultInput} from '../../../components/Inputs';
import {DefaultCheckBox} from '../../../components/CheckBoxes';

import SignInIcon from '../../../assets/images/signin.svg';
import {scaledSize} from '../../../styles';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';

import {authActions, authSelectors} from '../../../redux/auth';
import {errorSelectors} from '../../../redux/error';
import {useSelector, useDispatch} from 'react-redux';

function SignIn({navigation}) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => errorSelectors.selectLoading(state));
  const stayLogged = useSelector((state) =>
    authSelectors.selectStayLogged(state),
  );

  const [email, setEmail] = useState(''); //useState('arthur@fulcrum.rocks');
  const [password, setPassword] = useState('');

  const onPressForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };

  const onPressLogin = () => {
    dispatch(authActions.onSignIn({email, password, onSuccess}));
  };

  const onPressStayLogged = () => {
    dispatch(authActions.setAuthValue('stayLogged', !stayLogged));
  };

  const onSuccess = () => {
    navigation.navigate('Onboarding');
  };

  return !loading ? (
    <MainBlock>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainBlock}>
          <Text style={globalStyles.headerText}>Sign In</Text>
          <View>
            <DefaultInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <DefaultInput
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.row}>
              <DefaultCheckBox
                checked={stayLogged}
                title="Stay Logged In"
                onPress={onPressStayLogged}
              />
              <Text style={styles.regularText} onPress={onPressForgetPassword}>
                Forgot Your Password
              </Text>
            </View>
            <DefaultButton
              title="Login"
              onPress={onPressLogin}
              containerStyle={{marginVertical: scaledSize(55)}}
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
          <SignInIcon height={scaledSize(724)} width={scaledSize(829)} />
        </View>
      </KeyboardAwareScrollView>
    </MainBlock>
  ) : (
    <Loader />
  );
}

export default SignIn;
