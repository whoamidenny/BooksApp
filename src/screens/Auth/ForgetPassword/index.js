import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';
import {MainBlock} from '../../../components/Blocks';

import globalStyles from '../../../styles/globalStyles';
import {DefaultInput} from '../../../components/Inputs';
import {DefaultButton} from '../../../components/Buttons';

import ForgetPasswordIcon from '../../../assets/images/forgetpassword.svg';
import ResetPasswordIcon from '../../../assets/images/resetpassword.svg';
import ForgetInboxIcon from '../../../assets/images/forgetinbox.svg';
import {scaledSize} from '../../../styles';

function ForgetPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [screen, setScreen] = useState('email');

  function onPressButton(nameScreen) {
    setScreen(nameScreen);
  }

  function onPressSave() {
    navigation.navigate('SignIn');
  }

  if (screen === 'email') {
    return (
      <MainBlock>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={globalStyles.headerText}>Forgot Password</Text>
          <DefaultInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <DefaultButton
            title="Reset Password"
            onPress={() => onPressButton('inbox')}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ResetPasswordIcon width={scaledSize(861)} height={scaledSize(981)} />
        </View>
      </MainBlock>
    );
  } else if (screen === 'inbox') {
    return (
      <MainBlock>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[globalStyles.headerText, {textAlign: 'center'}]}>
            Check Your Inbox!
          </Text>
          <Text style={[globalStyles.regularText, {textAlign: 'center'}]}>
            We’ve sent you a reset password link to {email}
          </Text>
          <DefaultButton
            title="Sign In"
            onPress={() => onPressButton('password')}
            containerStyle={{marginVertical: scaledSize(70)}}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ForgetInboxIcon width={scaledSize(965)} height={scaledSize(1030)} />
        </View>
      </MainBlock>
    );
  } else if (screen === 'password') {
    return (
      <MainBlock>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={globalStyles.headerText}>New Password</Text>
          <DefaultInput placeholder="Password" />
          <DefaultButton title="Save" onPress={onPressSave} />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ForgetPasswordIcon
            width={scaledSize(942)}
            height={scaledSize(867)}
          />
        </View>
      </MainBlock>
    );
  }
}

export default ForgetPassword;
