import React from 'react';

import {View, Text} from 'react-native';
import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';

import SignInIcon from '../../../assets/images/signin.svg';
import {scaledSize} from '../../../styles';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';
import {DefaultInput} from '../../../components/Inputs';
import {DefaultCheckBox} from '../../../components/CheckBoxes';

function SignIn() {
  return (
    <MainBlock>
      <View style={styles.mainBlock}>
        <Text style={globalStyles.headerText}>Sign In</Text>
        <View>
          <DefaultInput placeholder="Email" />
          <DefaultInput placeholder="Password" />
          <View style={styles.row}>
            <DefaultCheckBox checked title="Stay Logged In" />
            <Text style={styles.regularText}>Forgot Your Password</Text>
          </View>
          <DefaultButton
            title="Login"
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
    </MainBlock>
  );
}

export default SignIn;
