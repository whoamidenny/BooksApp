import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Switch,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch, useSelector} from 'react-redux';
import {themeActions} from '../../redux/themes';
import {DefaultHeader} from '../../components/Headers';

import {BaseBlock, MainBlock} from '../../components/Blocks';

import styles from './styles';
import {scaledSize} from '../../styles';

const ProfileInput = ({...props}) => (
  <Input
    {...props}
    labelStyle={styles.profileInfoLabel}
    inputStyle={styles.profileInfoValue}
    inputContainerStyle={styles.inpContainerStyle}
    containerStyle={styles.profileInfoBlock}
    renderErrorMessage={false}
  />
);

function Profile({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const [fullname, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [password, setPassword] = useState('123456778900');

  const [isActive, setDarkThemeActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const themeName = theme.$theme;

    setDarkThemeActive(themeName === 'light' ? false : true);
  }, []);

  function onChangeTheme() {
    const themeName = theme.$theme;

    setLoading(true);
    dispatch(
      themeActions.changeThemeMode(themeName === 'light' ? 'dark' : 'light'),
    );
    if (themeName === 'dark') {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor('#f1f9ff')
        : null;
      StatusBar.setBarStyle('dark-content');
    } else {
      Platform.OS === 'android'
        ? StatusBar.setBackgroundColor('#1d2c3f')
        : null;

      StatusBar.setBarStyle('light-content');
    }

    setDarkThemeActive(!isActive);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  if (loading) {
    return (
      <MainBlock>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={'#0b1e35'} />
        </View>
      </MainBlock>
    );
  }

  return (
    <BaseBlock>
      <StatusBar
        barStyle={theme.$theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.$background}
      />
      <DefaultHeader title="Profile" rightTitle="SAVE" />
      <KeyboardAwareScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.profileContainer}>
          <Avatar
            source={require('../../assets/images/avatar.png')}
            rounded
            size={scaledSize(151)}
            containerStyle={{marginRight: scaledSize(71)}}
          />
          <View style={{flex: 1}}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.books}>11 books read</Text>
          </View>
        </View>

        <ProfileInput
          label="Full name"
          value={fullname}
          onChangeText={(text) => setFullName(text)}
        />

        <ProfileInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <ProfileInput
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.rowItem}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch value={isActive} onValueChange={() => onChangeTheme()} />
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.label}>Notifications</Text>
          <Switch />
        </View>
        <View style={[styles.rowItem, {marginVertical: scaledSize(88)}]}>
          <Text style={styles.link}>About Popcorn Books</Text>
          <Text style={styles.link}>Privacy policy</Text>
        </View>
      </KeyboardAwareScrollView>
    </BaseBlock>
  );
}

export default Profile;
