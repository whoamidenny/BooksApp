import React from 'react';

import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';
import {DefaultInput} from '../../../components/Inputs';

import {scaledSize} from '../../../styles';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';

import SignUpIcon from '../../../assets/images/signup.svg';

function SignUp({navigation}) {
  function onPressRegister() {
    navigation.navigate('Onboarding');
  }

  return (
    <MainBlock>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainBlock}>
          <Text style={globalStyles.headerText}>Sign Up</Text>
          <View>
            <DefaultInput placeholder="First & Last Name" />
            <DefaultInput placeholder="Email" />
            <DefaultInput placeholder="Password" />

            <DefaultButton
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
  );
}

export default SignUp;
