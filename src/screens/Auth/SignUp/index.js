import React from 'react';

import {View, Text} from 'react-native';
import {DefaultButton} from '../../../components/Buttons';
import {MainBlock} from '../../../components/Blocks';
import {DefaultInput} from '../../../components/Inputs';

import {scaledSize} from '../../../styles';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';

import SignUpIcon from '../../../assets/images/signup.svg';

function SignUp() {
  return (
    <MainBlock>
      <View style={styles.mainBlock}>
        <Text style={globalStyles.headerText}>Sign Up</Text>
        <View>
          <DefaultInput placeholder="First & Last Name" />
          <DefaultInput placeholder="Email" />
          <DefaultInput placeholder="Password" />

          <DefaultButton
            title="Register"
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
        <SignUpIcon height={scaledSize(659)} width={scaledSize(913)} />
      </View>
    </MainBlock>
  );
}

export default SignUp;
